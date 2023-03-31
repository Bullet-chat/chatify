import { Box } from "@chakra-ui/react";
import React from "react";
import { ChatRoomInfo, userDetailsProps } from ".";

export function UserDetails({ user }: userDetailsProps) {
  return (
    <Box
      display={{ base: "flex", md: "flex" }}
      alignItems="center"
      flexDir="column"
      p={3}
      width="30%"
      borderWidth="1px"
    >
      {user && <ChatRoomInfo user={user} />}
    </Box>
  );
}
