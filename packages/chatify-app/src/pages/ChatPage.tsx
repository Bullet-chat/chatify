import React, { useState } from "react";
import { ChatState } from "../Context/ChatProvider";
import { Box } from "@chakra-ui/layout";
import MyChats from "../components/MyChats";
import Chatbox from "../components/Chatbox";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { UserDetails } from "../components/userDetails";
function ChatPage() {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user, selectedChat,isAIConversation } = ChatState();
  console.log(selectedChat);
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box display="flex" w="100%" h="91.5vh">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
        {selectedChat && <UserDetails user={selectedChat} />}
      </Box>
    </div>
  );
}

export default ChatPage;
