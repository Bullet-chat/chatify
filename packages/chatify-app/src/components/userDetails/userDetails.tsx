import { Box } from "@chakra-ui/react";
import React from "react";
import { ChatRoomInfo, userDetailsProps } from ".";
import { ChatState } from "../../Context/ChatProvider";
import { Colors } from "../../utils/Colors";

export function UserDetails({ user }: userDetailsProps) {

  return (
    <Box
      display={{ base: "flex", md: "flex" }}
      alignItems="center"
      flexDir="column"
      p={3}
      bg={Colors.mainPrimary}
      width="30%"
      borderRadius="lg"
      borderWidth="1px"
    >
      <ChatRoomInfo user={user} />
    </Box>
  );
}
