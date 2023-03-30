import { Box } from "@chakra-ui/react";
import { ChatState } from "../../Context/ChatProvider";

export function ChatWithAI() {
  const { isAIConversation, setIsAIConversation, setSelectedChat } =
    ChatState();
  function handleAIChat() {
    setSelectedChat(undefined);
    setTimeout(()=>{
      setIsAIConversation(!isAIConversation);

    },0)
  }
  return (
    <Box
      className="flex py-2 rounded-lg mb-4  text-center bg-slate-500 justify-center cursor-pointer"
      onClick={handleAIChat}
    >
      <Box className="flex items-center text-white font-medium tracking-wider font-sofia">
        ChatWithAI
      </Box>
    </Box>
  );
}
