import { Box } from "@chakra-ui/react";
import React from "react";
import { userDetailsProps } from ".";
interface UserProps {
  email: string;
  isAdmin: boolean;
  name: string;
  pic: string;
  _id: string;
}
export function ChatRoomInfo({ user }: userDetailsProps) {
  const { chatName, isGroupChat, users } = user;
  return (
    <Box>
      <Box>{chatName}</Box>
      {isGroupChat &&
        users.map((user: UserProps, index: number) => (
          <Box key={index}>{user.name}</Box>
        ))}
      <Box>{chatName}</Box>
    </Box>
  );
}
