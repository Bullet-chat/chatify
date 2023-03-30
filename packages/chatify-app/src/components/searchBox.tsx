import { Box } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { SearchContacts } from "../api/search";
import { ChatState } from "../Context/ChatProvider";
import { useDebounce } from "../hooks";
export function SearchBox() {
  const [searchText, setSearchText] = useState("");
  const { user } = ChatState();
  const debouncedSearchText = useDebounce(searchText, 500);
  const { data: suggestions, isLoading } = useQuery({
    queryKey: ["contacts", debouncedSearchText],
    queryFn: async () =>
      await SearchContacts({ searchText: debouncedSearchText, user }),
    enabled: debouncedSearchText !== "",
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
        : debouncedSearchText}
    </Box>
  );
}
