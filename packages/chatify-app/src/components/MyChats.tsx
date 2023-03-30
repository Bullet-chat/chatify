import { AddIcon } from "@chakra-ui/icons";
import { Box, Stack, Text } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import { useEffect, useState } from "react";
import { getSender } from "../config/ChatLogics";
import ChatLoading from "./ChatLoading";
import GroupChatModal from "./miscellaneous/GroupChatModal";
import { Button } from "@chakra-ui/react";
import { ChatState } from "../Context/ChatProvider";
import { Colors } from "../utils/Colors";
import { ChatWithAI } from "./ChatWithAI";
import { UsersListProps } from "../types/userTypes";
import { SearchBox } from "./searchBox";
import ProfileImageProvider from "./userAvatar/ProfileImageProvider";
interface Props {
  fetchAgain: boolean;
}

const MyChats = ({ fetchAgain }: Props) => {
  const [loggedUser, setLoggedUser] = useState();

  const { selectedChat, setSelectedChat, user, chats, setChats } = ChatState();

  const toast = useToast();

  const fetchChats = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_API}/api/chat`,
        config
      );
      setChats(data);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to Load the chats",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  useEffect(() => {
    setLoggedUser(
      localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo") ?? "")
        : ""
    );
    if (user.token) fetchChats();
  }, [fetchAgain, user.token]);
  console.log("chatss====>", chats);
  return (
    <Box
      display={{ base: selectedChat ? "none" : "flex", md: "flex" }}
      flexDir="column"
      alignItems="center"
      p={3}
      w={{ base: "100%", md: "31%" }}
    >
      <Text className="text-4xl text-black font-bold font-sofia cursor-pointer text-left w-full">
        Chatify
      </Text>
   
      <Box
        pb={3}
        px={3}
        display="flex"
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        className="text-[#4B5155] text-base font-medium font-sofia"
      >
        Active Chats
        <GroupChatModal>
          <AddIcon w={3} h={3} color="gray.400" />
        </GroupChatModal>
      </Box>
      <SearchBox/>
      <Box
        display="flex"
        flexDir="column"
     pt={3}
        w="100%"
        h="100%"
        borderRadius="lg"
        overflowY="hidden"
      >
        <ChatWithAI />
        {chats ? (
          <Stack overflowY="scroll">
            {chats.map((chat: any) => (
              <Box
                onClick={() => setSelectedChat(chat)}
                cursor="pointer"
                color={selectedChat === chat ? "white" : "black"}
                px={3}
                py={2}
                borderRadius="lg"
                key={chat._id}
                className={`${
                  selectedChat === chat
                    ? "bg-[#F9FAFC] border-[#DBE5ED] border-2 rounded-md"
                    : "bg-white"
                } flex`}
              >
                <ProfileImageProvider userItem={chat}/>
                <Box>
                  <Text className="text-[#4B5155] font-semibold font-sofia text-base">
                    {!chat.isGroupChat
                      ? getSender(loggedUser, chat.users)
                      : chat.chatName}
                  </Text>
                  {chat.latestMessage && (
                    <Text className="text-[#7B8793] font-semibold text-xs">
                      {chat.latestMessage.sender.name} :
                      {chat.latestMessage.content.length > 20
                        ? chat.latestMessage.content.substring(0, 20) + "..."
                        : chat.latestMessage.content}
                    </Text>
                  )}
                </Box>
              </Box>
            ))}
          </Stack>
        ) : (
          <ChatLoading />
        )}
      </Box>
    </Box>
  );
};

export default MyChats;
