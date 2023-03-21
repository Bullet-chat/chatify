import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { BoxDots } from "../../../utils/BoxDots";
import { SignInForm } from "../SignIn";
import { SignUp } from "./signup";

export function FormTab() {
  return (
    <div className="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
      <div
        className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl
   relative z-10"
      >
        <Box w="100%" p={4} borderRadius="lg">
          <Tabs isFitted variant="soft-rounded">
            <TabList>
              <Tab
                _selected={{ color: "white", bg: "#C93614", border: "none" }}
                color={"#4B5563"}
              >
                Sign In
              </Tab>
              <Tab
                _selected={{ color: "white", bg: "#C93614", border: "none" }}
                color={"#4B5563"}
              >
                Sign Up
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <SignInForm />
              </TabPanel>
              <TabPanel>
                <SignUp />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </div>
      <BoxDots className={" top-0 left-0 -mt-12 -ml-12 text-yellow-300"} />
      <BoxDots className={" bottom-0 right-0 -mb-12 -mr-12 text-gray-600"} />
    </div>
  );
}
