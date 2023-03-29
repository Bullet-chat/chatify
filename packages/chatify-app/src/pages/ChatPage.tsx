import React, { useState } from "react";
import { ChatState } from "../Context/ChatProvider";
import { Box } from "@chakra-ui/layout";
import MyChats from "../components/MyChats";
import Chatbox from "../components/Chatbox";
import { UserDetails } from "../components/userDetails";
import { AiChatroom } from "../components/ChatWithAI";
function ChatPage() {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user, selectedChat, isAIConversation } = ChatState();
  return (
    <div className="w-full bg-white">
      <Box display="flex" w="100%" h="100vh">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && !isAIConversation && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
        {isAIConversation && (
          <AiChatroom fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}

        {user && selectedChat && <UserDetails user={selectedChat} />}
      </Box>
    </div>
  );
}

export default ChatPage;
