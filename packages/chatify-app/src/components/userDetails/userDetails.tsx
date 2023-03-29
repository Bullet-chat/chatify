import { Box } from "@chakra-ui/react";
import React from "react";
import { ChatRoomInfo, userDetailsProps } from ".";
import { ChatState } from "../../Context/ChatProvider";
import { Colors } from "../../utils/Colors";
import SideDrawer from "../miscellaneous/SideDrawer";

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
      <SideDrawer/>
      {user && <ChatRoomInfo user={user} />}
    </Box>
  );
}
