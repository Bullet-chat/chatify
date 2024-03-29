import { Box } from "@chakra-ui/react";
import React, { Dispatch, useEffect, useRef } from "react";
import { ChatState } from "../../Context/ChatProvider";
import createMessageObject from "../../utils/createMessageObject";
import generateUniqueId from "../../utils/generateUniqueId";
import { getMessageTimestamp } from "../../utils/getMessageTimestamp";
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
  const { user } = ChatState();
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
        const botObj = createMessageObject({
          id: _generateId,
          content: BotResponse,
          isAi: true,
          user,
        });
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
  console.log("conversation0000", conversation);
  return (
    <Box id="1234" className="flex flex-col font-sofia overflow-y-auto">
      {conversation.map((chat) => (
        <Box className="flex flex-col" key={chat.id}>
          <Box
            className={`${
              chat.isAi
                ? "ml-2 mt-4 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white max-w-xl self-start flex"
                : "mt-4 mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white max-w-xl self-end flex"
            } font-medium text-sm`}
          >
            {chat.content}
          </Box>
          <span className={`${chat.isAi?"self-start ml-2 ":"self-end  mr-2"} flex text-xs mt-1 font-semibold`}>{getMessageTimestamp(chat.timeStamp)}</span>
        </Box>
      ))}
      <Box
        ref={parentRef}
        className="bg-gray-400 rounded-lg ml-3 mt-3 px-1  max-w-xl"
      ></Box>
    </Box>
  );
}
