import axios from "axios";

interface UserProps {
  name: string;
  email: string;
  password: string;
  pic: string;
}
export const CreateUser = async (data: UserProps) => {
  const { name, email, password, pic } = data;
  console.log(data);
  const config = {
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    },
  };
  return await axios
    .post(
      "http://localhost:5000/api/user",
      {
        name,
        email,
        password,
        pic,
      },
      config
    )
    .then((res) => res.data);
};
