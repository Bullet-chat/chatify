import { Box } from "@chakra-ui/react";
import React, { Dispatch, useEffect, useRef } from "react";
import { ChatState } from "../../Context/ChatProvider";
import createMessageObject from "../../utils/createMessageObject";
import generateUniqueId from "../../utils/generateUniqueId";
import { typeText } from "../../utils/typedText";
interface ConversationProps {
  conversation: Array<any>;
  setConversation: Dispatch<any>;
  BotResponse: string;
}
export function ChatConversation({
  conversation,
  setConversation,
  BotResponse,
}: ConversationProps) {
  console.log(conversation);
  const parentRef = useRef<any>();
  const {user}=ChatState();
  useEffect(() => {
    if (BotResponse) {
      fetchData();
    }
  }, [BotResponse]);
  async function fetchData() {
    const _generateId = generateUniqueId();
    const BotDiv = createDivWithId(_generateId);
    await typeText(BotDiv, BotResponse)
      .then((response: any) => {
        BotDiv.innerHTML = "";
        const botObj=createMessageObject({id:_generateId,content:BotResponse,isAi:true,user})
        setConversation([...conversation, botObj]);
      })
      .catch((error) => console.log(error));
  }
  function createDivWithId(_generateId: string) {
    const div = document.createElement("div");
    div.id = _generateId;
    parentRef?.current?.appendChild(div);
    return div;
  }
  return (
    <Box id="1234">
      {conversation.map((chat, index) => (
        <Box key={index}>{chat.content}---******--{chat.id}</Box>
      ))}
      <Box ref={parentRef}></Box>
    </Box>
  );
}
