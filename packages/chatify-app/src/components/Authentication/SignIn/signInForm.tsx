
import { InputComponent } from "../../../utils/Inputs";

export function SignInForm() {
  return (
    <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
      <InputComponent
        type="email"
        label="Email"
        placeholder="nikilmethew@gmail.com"
      />
      <InputComponent type="password" label="Password" placeholder="Password" />

      <div className="relative">
        <a
          className="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-orange-700
rounded-lg transition duration-200 hover:bg-orange-500 ease"
        >
          Sign In
        </a>
      </div>
    </div>
  );
}
