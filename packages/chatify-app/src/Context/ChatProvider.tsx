import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";


type Props = {
  children: string | JSX.Element | JSX.Element[];
};
interface ChatContextType {
  notification: any;
  selectedChat:any;
  setSelectedChat:React.Dispatch<React.SetStateAction<string>> 
}
const ChatContext = createContext<any>(null);
const ChatProvider = ({ children }: Props) => {
  const [selectedChat, setSelectedChat] = useState();
  const [user, setUser] = useState("guru");
  const [isAIConversation, setIsAIConversation] = useState(false);
  const [notification, setNotification] = useState([]);
  const [chats, setChats] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo") ?? "")
      : null;
    setUser(userInfo);

    if (!userInfo) navigate("/");
  }, [navigate]);

  return (
    <ChatContext.Provider
      value={{
        selectedChat,
        setSelectedChat,
        user,
        setUser,
        notification,
        setNotification,
        chats,
        setChats,
        isAIConversation,
        setIsAIConversation,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;
