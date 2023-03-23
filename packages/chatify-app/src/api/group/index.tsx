import axios from "axios";

interface GroupProps {
  name: string;
  users: string;
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
