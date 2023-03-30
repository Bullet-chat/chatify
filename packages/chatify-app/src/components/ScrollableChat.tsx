import { Avatar } from "@chakra-ui/avatar";
import { Box } from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/tooltip";
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

  return (
    <>
      {messages &&
        messages.map((m: any, i: number) => (
          <div style={{ display: "flex" }} key={m._id}>
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
                style={{
                  backgroundColor: `${
                    m.sender._id === user._id ? "#AFBBC6" : "#FFFFFF"
                  }`,
                  borderWidth: "1px",
                  color: m.sender._id === user._id ? "#FFFFFF" : "#7B8793",
                }}
                className="rounded-lg font-sofia border-[#707070b4] py-2 px-5"
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
    </>
  );
};

export default ScrollableChat;
