import { Box } from "@chakra-ui/react";
import React, { Dispatch, useEffect, useRef } from "react";
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
  // const [BotDiv] = ["1234"].map((e: any) => {
  //   return document.getElementById(e);
  // });
  const parentRef = useRef<any>();
  useEffect(() => {
    // console.log("botrespo===>", BotDiv, BotResponse);
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
        setConversation([...conversation, BotResponse]);
      })
      .catch((error) => console.log(error));
  }
  function createDivWithId(_generateId: string) {
    const div = document.createElement("div");
    div.id = _generateId;
    parentRef?.current?.appendChild(div);
    console.log("genratedIdddddd", _generateId);
    return div;
  }
  return (
    <Box id="1234">
      {conversation.map((chat, index) => (
        <Box key={index}>{chat}</Box>
      ))}
      <Box ref={parentRef}></Box>
    </Box>
  );
}
