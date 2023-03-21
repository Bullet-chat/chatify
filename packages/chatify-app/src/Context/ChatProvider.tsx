import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

const ChatContext = createContext<any>(null);
type Props = {
  children: string | JSX.Element | JSX.Element[];
};
const ChatProvider = ({ children }: Props) => {
  const [selectedChat, setSelectedChat] = useState();
  const [user, setUser] = useState();
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
