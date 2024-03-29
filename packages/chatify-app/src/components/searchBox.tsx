import { Box, Spinner, useToast } from "@chakra-ui/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { CreateChatRoom } from "../api/group";
import { SearchContacts } from "../api/search";
import { ChatState } from "../Context/ChatProvider";
import { useDebounce } from "../hooks";
import UserListItem from "./userAvatar/UserListItem";
export function SearchBox() {
  const [searchText, setSearchText] = useState("");
  const { user, chats, setChats } = ChatState();
  const toast = useToast();
  const debouncedSearchText = useDebounce(searchText, 500);
  const { data: suggestions, isLoading } = useQuery({
    queryKey: ["users", debouncedSearchText],
    queryFn: async () =>
      await SearchContacts({ searchText: debouncedSearchText, user }),
    enabled: debouncedSearchText !== "",
  });
  const createChatRoomMutation = useMutation({
    mutationFn: CreateChatRoom,
    onSuccess: (data) => {
      if (!chats.find((c: { _id: any }) => c._id === data._id)) {
        setChats([data, ...chats]);
      }
      setSearchText("");
      toast({
        title: "New Chat Created!",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error fetching the chat",
        description: error?.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    },
  });
  return (
    <Box className="flex flex-col w-full">
      <div className="relative w-full">
        <input
          type="text"
          id="voice-search"
          className="bg-[#F9FAFC] border border-[#DBE5ED] outline-none text-gray-900 text-sm rounded-lg focus:ring-[#76C00D] focus:border-[#76C00D] block w-full pl-2 p-2 font-sofia"
          placeholder="Search People"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
      {debouncedSearchText !== "" && isLoading
        ? "Loading..."
        : suggestions?.map((suggestUser: any) => (
            <UserListItem
              key={suggestUser._id}
              user={suggestUser}
              handleFunction={() =>
                createChatRoomMutation.mutate({
                  clientId: suggestUser._id,
                  user,
                })
              }
            />
          ))}
      {createChatRoomMutation.isLoading && (
        <Box className="self-center">
          <Spinner className="self-center" ml="auto" display="flex" />
        </Box>
      )}
    </Box>
  );
}
