import { useState } from "react";
import { InputComponent } from "../../../utils/Inputs";
interface userDataType {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  profilePicture: string;
}
export function SignUp() {
  const [userData, setUserData] = useState<userDataType>({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePicture: "",
  });
  function handleUserData(key: string, e: React.ChangeEvent<HTMLInputElement>) {
    console.log("data");
    setUserData((prev: userDataType) => ({
      [key]: e.target.value,
      ...prev,
    }));
  }
  function SubmitHandler() {
    console.log(userData);
  }
  return (
    <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
      <InputComponent
        type="text"
        label="Username"
        placeholder="Guru"
        value={userData.userName}
        onChange={(e) => handleUserData("userName", e)}
      />
      <InputComponent
        type="email"
        label="Email"
        placeholder="nikilmethew@gmail.com"
        value={userData.email}
        onChange={(e) => handleUserData("email", e)}
      />
      <InputComponent
        type="password"
        label="Password"
        placeholder="Password"
        value={userData.password}
        onChange={(e) => handleUserData("password", e)}
      />
      <InputComponent
        type="password"
        label="Password"
        placeholder="Confirm Password"
        value={userData.confirmPassword}
        onChange={(e) => handleUserData("confirmPassword", e)}
      />

      <div className="relative">
        <a
          className="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-orange-700
rounded-lg transition duration-200 hover:bg-orange-500 ease"
          onClick={SubmitHandler}
        >
          Sign Up
        </a>
      </div>
    </div>
  );
}
