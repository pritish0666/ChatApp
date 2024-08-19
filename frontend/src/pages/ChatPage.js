import { Box, ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import Chatbox from "../Components/ChatBox";
import MyChats from "../Components/MyChats";
import { ChatState } from "../Context/ChatProvider";
import SideDrawer from "../Components/miscellaneous/SideDrawer";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <ChakraProvider>
      <Box width="100%">
        {user && <SideDrawer />}
        <Box
          display="flex"
          justifyContent="space-between"
          width="100%"
          height="91.5vh"
          padding="10px"
        >
          {user && <MyChats fetchAgain={fetchAgain} />}
          {user && (
            <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
          )}
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default Chatpage;
