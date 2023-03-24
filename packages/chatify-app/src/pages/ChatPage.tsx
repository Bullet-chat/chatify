import React,{useState} from 'react'
import { ChatState } from '../Context/ChatProvider';
import { Box } from "@chakra-ui/layout";
import MyChats from '../components/MyChats';
import Chatbox from '../components/Chatbox';
import SideDrawer from '../components/miscellaneous/SideDrawer';
function ChatPage() {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box display="flex" w="100%" h="91.5vh">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
}

export default ChatPage