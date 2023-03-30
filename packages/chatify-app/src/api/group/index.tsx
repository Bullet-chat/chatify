import axios from "axios";

interface GroupProps {
  name: string;
  users: string;
  user:any;
}
interface SearchProps{
     search?: string;
     user:any;
}
interface CreateChatRoomProps{
  clientId?: string;
  user:any;
}

export const CreateGroup = async (data: GroupProps) => {
  const { name, users,user } = data;
  console.log("createGroupss", data);
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };
  return await axios
    .post(
      `${import.meta.env.VITE_BACKEND_API}/api/chat/group`,
      {
        name,
        users,
      },
      config
    )
    .then((res) => res.data);
};


export const getSearchedUsers =async (data: SearchProps) => {
     const { search,user} = data;
     console.log("createGroupss", data);
     const config = {
       headers: {
         Authorization: `Bearer ${user.token}`,
       },
     };
     return await axios.get(
          `${import.meta.env.VITE_BACKEND_API}/api/user?search=${search}`,
          config
        )
       .then((res) => res.data);
   };

   export const CreateChatRoom = async (data: CreateChatRoomProps) => {
    const { clientId,user } = data;
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    return await axios.post(
      `${import.meta.env.VITE_BACKEND_API}/api/chat`,
      { clientId },
        config
      )
      .then((res) => res.data);
  };
