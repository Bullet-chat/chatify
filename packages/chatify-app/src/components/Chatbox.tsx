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
  const { selectedChat } = ChatState();

  return (
    <Box
      display={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      p={3}
      bg={Colors.mainPrimary}
      width="100%"
      borderWidth="1px"
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  );
};

export default Chatbox;
