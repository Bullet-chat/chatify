import { Toast, useToast } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { CreateUser } from "../../../api/authentication";
import { InputComponent } from "../../../utils/Inputs";
interface userDataType {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  profilePicture: {
    name: string;
    url: string;
  };
}
export function SignUp() {
  const toast = useToast();
  const navigate = useNavigate();
  const [userData, setUserData] = useState<userDataType>({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePicture: {
      name: "",
      url: "",
    },
  });
  const mutation = useMutation({
    mutationFn: async (data: any) => {
      return await CreateUser({
        name: data.name,
        email: data.email,
        password: data.password,
        pic: data.pic,
      });
    },
    onSuccess: (data, variables, context) => {
      toast({
        title: "Registration Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      console.log("dataselectionsss", data, variables, context);
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/chat");
    },
    onError:(error:any, variables, context)=>{
      toast({
        title: "Error Occured!",
        description:error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    },
  });
  function handleUserData(key: string, value: string | object) {
    setUserData((prev: userDataType) => ({
      ...prev,
      [key]: value,
    }));
  }
  const uploadImage = (pics: any) => {
    if (pics === undefined) {
      Toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", import.meta.env.VITE_UPLOAD_PRESET);
      data.append("cloud_name", import.meta.env.VITE_CLOUD_NAME);
      fetch(
        `https://api.cloudinary.com/v1_1/${
          import.meta.env.VITE_CLOUD_NAME
        }/image/upload`,
        {
          method: "post",
          body: data,
        }
      )
        .then((res) => res.json())
        .then((data) => {
          handleUserData("profilePicture", {
            name: pics.name,
            url: data.url.toString(),
          });
          console.log(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      console.log("error", "please select an image");
      return;
    }
  };
  async function SubmitHandler(e:any) {
    e.preventDefault();
    if(userData.password !==userData.confirmPassword){
      toast({
        title: "Error Occured!",
        description:"Password and Confirm Password must be same!!!",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    mutation.mutate({
      name: userData.userName,
      email: userData.email,
      password: userData.password,
      pic: userData.profilePicture.url,
    });
  }
  return (
    <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
      <form onSubmit={(e)=>SubmitHandler(e)}>
      <InputComponent
        type="text"
        label="Username"
        placeholder="Guru"
        value={userData.userName}
        onChange={(e) => handleUserData("userName", e.target.value)}
      />
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
      <InputComponent
        type="password"
        label="Password"
        placeholder="Confirm Password"
        value={userData.confirmPassword}
        onChange={(e) => handleUserData("confirmPassword", e.target.value)}
      />
      <InputComponent
        type="file"
        label="Profile picture"
        placeholder="Select the image file"
        accept="image/*"
        onChange={(e) => uploadImage(e.target.files[0])}
      />

      <div className="relative">
        <input
          className="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-orange-700
rounded-lg transition duration-200 hover:bg-orange-500 ease cursor-pointer"
        type="submit"
        value= {mutation.isLoading ? "Creating new user..." : "Sign Up"}
        />
      </div>
      </form>
    </div>
  );
}
