import { Box } from "@chakra-ui/react";
import React, { Dispatch, useEffect } from "react";
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
  const [BotDiv] = ["1234"].map((e: any) => {
    return document.getElementById(e);
  });
  useEffect(() => {
    console.log("botrespo===>", BotDiv, BotResponse);
    if (BotDiv && BotResponse) typeText(BotDiv, BotResponse);
  }, [BotResponse]);
  return <Box id="1234">details</Box>;
}
