import axios from "axios";

interface GroupProps {
  name: string;
  users: string;
}

const config = {
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
  },
};
export const CreateGroups = async (data: GroupProps) => {
  const { name, users } = data;

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
