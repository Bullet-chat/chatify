import { Box, FormControl, Input } from "@chakra-ui/react";
import React, { SetStateAction, useState } from "react";
import { ChatState } from "../../Context/ChatProvider";
import { Colors } from "../../utils/Colors";
import { ChatConversation } from "./ChatConversation";
interface Props {
  fetchAgain: boolean;
  setFetchAgain: (args: boolean) => void;
}
export function AiChatroom({ fetchAgain, setFetchAgain }: Props) {
  const { isAIConversation } = ChatState();
  const [newMessage, setNewMessage] = useState("");
  const [conversation,setConversation]=useState([])
  function sendMessageToBot() {
    console.log("called");
  }
  function typingHandler(e: { target: { value: SetStateAction<string> } }) {
    setNewMessage(e.target.value);
    return;
  }
  return (
    <Box
      display={{ base: isAIConversation ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      p={3}
      bg={Colors.mainPrimary}
      width="100%"
      borderWidth="1px"
    >
      <Box
        display="flex"
        flexDir="column"
        justifyContent="flex-end"
        p={3}
        bg={Colors.mainPrimary}
        w="100%"
        h="100%"
        borderRadius="lg"
        overflowY="scroll"
      >
        <ChatConversation data={conversation}/>
      </Box>
      <FormControl
        onKeyDown={sendMessageToBot}
        id="Ai-connections"
        isRequired
        mt={3}
      >
        <Input
          variant="filled"
          bg="#E0E0E0"
          placeholder="Enter a message.."
          value={newMessage}
          color={Colors.mainSecondary}
          onChange={typingHandler}
        />
      </FormControl>
    </Box>
  );
}


