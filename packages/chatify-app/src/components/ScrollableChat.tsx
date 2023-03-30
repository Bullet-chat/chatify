import { Avatar } from "@chakra-ui/avatar";
import { Box } from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/tooltip";
import { useEffect, useRef } from "react";
import {
  isLastMessage,
  isSameSender,
  isSameSenderMargin,
  isSameUser,
} from "../config/ChatLogics";
import { ChatState } from "../Context/ChatProvider";
import { getMessageContent } from "../utils/getMessageContent";
interface Props {
  messages: any;
}
const ScrollableChat = ({ messages }: Props) => {
  const { user } = ChatState();
  const chatRoomRef=useRef(null);
useEffect(() => {
  scrollToBottom()
}, [])
function scrollToBottom() {
  console.log("calleddddd",chatRoomRef?.current);
  chatRoomRef?.current?.scrollIntoView({ behavior: "smooth" });
}
  return (
    <div ref={chatRoomRef}>
      {messages &&
        messages.map((m: any, i: number) => (
          <div style={{ display: "flex"}} key={m._id}>
            {(isSameSender(messages, m, i, user._id) ||
              isLastMessage(messages, i, user._id)) && (
              <Tooltip label={m.sender.name} placement="bottom-start" hasArrow>
                <Avatar
                  mt="7px"
                  mr={1}
                  size="sm"
                  cursor="pointer"
                  name={m.sender.name}
                  borderWidth="1px"
                  borderColor="#707070b4"
                  src={m.sender.pic}
                />
              </Tooltip>
            )}
            <Box
              className="flex flex-col"
              style={{
                marginLeft: isSameSenderMargin(messages, m, i, user._id),
                marginTop: isSameUser(messages, m, i) ? 3 : 10,
              }}
            >
              <span
                className={`${m.sender._id !== user._id ?"ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white":"mt-4 mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"}`}
              >
                {m.content}
              </span>
       
              {(isSameSender(messages, m, i, user._id) ||
                isLastMessage(messages, i, user._id) || m.sender._id === user._id) && (
                <span onClick={()=>console.log(m.createdAt)}>{getMessageContent(m.createdAt)}</span>
              )}
            </Box>
          </div>
        ))}
    </div>
  );
};

export default ScrollableChat;
