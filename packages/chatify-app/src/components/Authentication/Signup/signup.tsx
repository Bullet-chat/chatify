import { Toast, useToast } from "@chakra-ui/react";
import { useState } from "react";
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
        <a
          className="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-orange-700
rounded-lg transition duration-200 hover:bg-orange-500 ease cursor-pointer"
          onClick={SubmitHandler}
        >
          Sign Up
        </a>
      </div>
    </div>
  );
}
