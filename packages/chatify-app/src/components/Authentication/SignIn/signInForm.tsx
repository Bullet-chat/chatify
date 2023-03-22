import { useToast } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router";
import { SignInUser } from "../../../api/authentication";
import { InputComponent } from "../../../utils/Inputs";
interface userDataType {
  email: string;
  password: string;
}
export function SignInForm() {
  const toast = useToast();
  const navigate = useNavigate();
  const [userData, setUserData] = useState<userDataType>({
    email: "",
    password: "",
  });
  function handleUserData(key: string, value: string | object) {
    setUserData((prev: userDataType) => ({
      ...prev,
      [key]: value,
    }));
  }
  const signInMutation = useMutation({
    mutationFn: async (data: any) => {
      return await SignInUser({
        email: data.email,
        password: data.password,
      });
    },
    onSuccess: (data, variables, context) => {
      toast({
        title: "Sign In Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/chat");
    },
    onError:(error: any, variables, context)=>{
      toast({
        title: "Error Occured!",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    },
  });

  function SubmitHandler() {
    const {email,password} = userData
    if(!email && !password) return;
    signInMutation.mutate(userData);
  }
  return (
    <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
      <InputComponent
        type="email"
        label="Email"
        placeholder="nikilmethew@gmail.com"
        value={userData.email}
        onChange={(e) => handleUserData("email", e.target.value)}
      />
      <InputComponent
        type="password"
        label="Password"
        placeholder="Password"
        value={userData.password}
        onChange={(e) => handleUserData("password", e.target.value)}
      />

      <div className="relative">
        <a
          className="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-orange-700
rounded-lg transition duration-200 hover:bg-orange-500 ease cursor-pointer"
          onClick={SubmitHandler}
        >
          {signInMutation.isLoading ? "Signing in..." : "Sign In"}
        </a>
      </div>
    </div>
  );
}
