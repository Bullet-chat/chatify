import axios from "axios";

interface UserProps {
  name?: string;
  email: string;
  password: string;
  pic?: string;
}

const config = {
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
  },
};
export const CreateUser = async (data: UserProps) => {
  const { name, email, password, pic } = data;

  return await axios
    .post(
      `${import.meta.env.VITE_BACKEND_API}/api/user`,
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

export const SignInUser=async (data: UserProps) => {
  const { email, password } = data;

  return await axios
    .post(
      `${import.meta.env.VITE_BACKEND_API}/api/user/login`,
      {
        email,
        password
      },
      config
    )
    .then((res) => res.data);
};
