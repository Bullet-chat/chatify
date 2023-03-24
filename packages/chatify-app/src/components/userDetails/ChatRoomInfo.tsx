import { Box } from "@chakra-ui/react";
import React from "react";
import { userDetailsProps } from ".";
interface UserProps {
  email: string;
  isAdmin: boolean;
  name: string;
  pic: string;
  _id: string;
}
export function ChatRoomInfo({ user }: userDetailsProps) {
  const { chatName, isGroupChat, users } = user;
  console.log("user", user);
  return (
    <Box>
      {!isGroupChat && (
        <section className="w-64 mx-auto bg-[#20354b] px-8 py-6 shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-gray-400 text-sm">2d ago</span>
          </div>
          <div className="mt-6 w-fit mx-auto">
            <img
              src={`${user?.groupAdmin?.pic}`}
              className="rounded-full w-28 "
              alt="profile"
              srcSet=""
            />
          </div>

          <div className="mt-8 ">
            <h2 className="text-white font-bold text-2xl tracking-wide">
              {user?.groupAdmin?.name}
            </h2>
          </div>
          <p className="text-emerald-400 font-semibold mt-2.5">Active</p>
        </section>
      )}
      {isGroupChat && (
        <React.Fragment>
          <Box>{chatName}</Box>
          {users.map((user: UserProps, index: number) => (
            <Box key={index}>{user?.name}</Box>
          ))}
        </React.Fragment>
      )}
    </Box>
  );
}
