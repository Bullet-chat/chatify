import { Box, FormControl, Input } from "@chakra-ui/react";
import React, { SetStateAction, useState } from "react";
import { getAIResponse } from "../../api/openAPI";
import { ChatState } from "../../Context/ChatProvider";
import { Colors } from "../../utils/Colors";
import createMessageObject from "../../utils/createMessageObject";
import generateUniqueId from "../../utils/generateUniqueId";
import { ChatConversation } from "./ChatConversation";
interface Props {
  fetchAgain: boolean;
  setFetchAgain: (args: boolean) => void;
}
export function AiChatroom({ fetchAgain, setFetchAgain }: Props) {
  const { isAIConversation, user } = ChatState();
  const [newMessage, setNewMessage] = useState("");
  const [BotResponse, setBotResponse] = useState("");
  const [conversation, setConversation] = useState<any>([]);
  async function sendMessageToBot(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Enter" && newMessage.trim() !== "") {
      const conversationObj=createMessageObject({id:generateUniqueId(),content:newMessage,user});
      setConversation([...conversation, conversationObj]);
      const queryText=newMessage.trim();
      setNewMessage("")
      const response = await getAIResponse({
        prompt: queryText,
        user,
      });
      if (response) setBotResponse(response.bot);
    }
  }
  function typingHandler(e: { target: { value: SetStateAction<string> } }) {
    setNewMessage(e.target.value);
    // return;
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
        <ChatConversation
          conversation={conversation}
          setConversation={setConversation}
          BotResponse={BotResponse}
        />
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
          placeholder="Talk with me..."
          value={newMessage}
          color={Colors.mainSecondary}
          onChange={typingHandler}
        />
      </FormControl>
    </Box>
  );
}
