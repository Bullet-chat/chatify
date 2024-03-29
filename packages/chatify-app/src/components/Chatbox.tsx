import { Box } from "@chakra-ui/layout";
// import "./styles.css";
import SingleChat from "./SingleChat";
import { ChatState } from "../Context/ChatProvider";
import { Colors } from "../utils/Colors";
interface Props {
  fetchAgain: boolean;
  setFetchAgain: (args: boolean) => void;
}
const Chatbox = ({ fetchAgain, setFetchAgain }: Props) => {
  const { selectedChat,isAIConversation } = ChatState();

  return (
    <Box
      display={{ base: (isAIConversation ||selectedChat )? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      p={3}
      width="100%"
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  );
};

export default Chatbox;
