import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { getSenderFull } from "../../config/ChatLogics";
import { ChatState } from "../../Context/ChatProvider";

function ProfileImageProvider({ userItem }: any) {
  const { user } = ChatState();
  const defaultUserImage =
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";
  const [userImage, setUserImage] = React.useState(defaultUserImage);
  useEffect(() => {
    if (userItem.isGroupChat) {
      return;
    } else {
      setUserImage(getSenderFull(user, userItem.users).pic);
    }
  }, [userItem]);
  return (
    <Box className="relative mr-5">
      <img
        className="w-10 h-10 rounded-full"
        src={userImage}
        alt=""
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src = defaultUserImage;
        }}
      />
      <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
    </Box>
  );
}

export default ProfileImageProvider;
