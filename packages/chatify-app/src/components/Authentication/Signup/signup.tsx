import React from 'react'
import { InputComponent } from '../../../utils/Inputs'

export function SignUp() {
  return (
     <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
     <InputComponent
       type="text"
       label="Username"
       placeholder="Guru"
     />
     <InputComponent
       type="email"
       label="Email"
       placeholder="nikilmethew@gmail.com"
     />
     <InputComponent
       type="password"
       label="Password"
       placeholder="Password"
     />
     <InputComponent
       type="password"
       label="Password"
       placeholder="Confirm Password"
     />

     <div className="relative">
       <a
         className="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-orange-700
rounded-lg transition duration-200 hover:bg-orange-500 ease"
       >
         Sign Up
       </a>
     </div>
   </div>
  )
}

