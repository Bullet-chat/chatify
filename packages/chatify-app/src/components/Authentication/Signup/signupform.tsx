

import { FormTab } from "./formTab";

export const SignupForm = () => {
  return (
    <>
      <div className="bg-white relative lg:py-20">
        <div
          className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl
      xl:px-5 lg:flex-row"
        >
          <div className="flex flex-col items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row">
            <div className="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
              <div className="flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
                <img
                  src="https://img.freepik.com/free-vector/online-world-concept-illustration_114360-1007.jpg?w=996&t=st=1679336892~exp=1679337492~hmac=982770d0752d843d7a9ec7f4b5fc69debbb95d0e94efbabd05e10a0f2b65c046"
                  className="btn-"
                />
              </div>
            </div>
            <FormTab/>
          </div>
        </div>
      </div>
    </>
  );
};
