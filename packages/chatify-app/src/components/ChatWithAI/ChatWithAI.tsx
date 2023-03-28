import { Box } from "@chakra-ui/react";
import { ChatState } from "../../Context/ChatProvider";

export function ChatWithAI() {
  const { isAIConversation, setIsAIConversation } = ChatState();
  function handleAIChat() {
    setIsAIConversation(!isAIConversation);
  }
  return (
    <Box
      className="flex  text-center bg-slate-500 justify-center cursor-pointer"
      onClick={handleAIChat}
    >
      <Box className="flex items-center text-white font-medium tracking-wider">
        ChatWithAI
      </Box>
    </Box>
  );
}
