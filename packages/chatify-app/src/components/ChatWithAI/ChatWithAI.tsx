import { Box } from "@chakra-ui/react";

export function ChatWithAI() {
  return (
    <Box
      className="flex  text-center bg-slate-500 justify-center cursor-pointer"
      onClick={() => {console.log("chatai")}}
    >
      <Box className="flex items-center text-white font-medium tracking-wider">
        ChatWithAI
      </Box>
    </Box>
  );
}
