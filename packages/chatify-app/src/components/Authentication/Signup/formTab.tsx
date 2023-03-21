import { BoxDots } from '@utils/BoxDots'
import { InputComponent } from '@utils/Inputs'

export function FormTab() {
  return (
     <div className="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
     <div
       className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl
   relative z-10"
     >
       <p className="w-full text-4xl font-medium text-center leading-snug font-serif">
         Sign up for an account
       </p>
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
             Submit
           </a>
         </div>
       </div>
     </div>
     <BoxDots
       className={" top-0 left-0 -mt-12 -ml-12 text-yellow-300"}
     />
     <BoxDots
       className={" bottom-0 right-0 -mb-12 -mr-12 text-gray-600"}
     />
   </div>
  )
}