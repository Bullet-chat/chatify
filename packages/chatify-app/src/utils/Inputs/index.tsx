import React from "react";

interface InputProps {
  type: "text" | "number" | "boolean" | "password"|"email" |"file";
  placeholder: string;
  value?: any;
  label: string;
  onChange?: (value: any) => void;
  accept?:string;
}
export const InputComponent = ({
  type,
  label,
  value,
  placeholder,
  onChange,
  accept=""
}: InputProps) => {
  return (
    <>
      <div className="relative">
        <p
          className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute"
        >
          {label}
        </p>
        <input
          placeholder={placeholder}
          type={type}
          required
          value={value}
          accept={accept}
          onChange={onChange}
          className="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"
        />
      </div>
    </>
  );
};

