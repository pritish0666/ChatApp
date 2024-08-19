import React from "react";
import Signup from "../Components/Authentication/Signup";
import Login from "../Components/Authentication/Login";
import {
  Container,
  Box,
  Text,
  Tab,
  Tabs,
  TabPanels,
  TabPanel,
  TabList,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const HomePage = () => {
  const navigate = useNavigate(); // Initialize navigate instead of history

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) navigate("/chats"); // Use navigate to redirect to "/chats"
  }, [navigate]);
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="bisque"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="2xl"> CHIT-CHAT</Text>
      </Box>
      <Box bg="bisque" p={4} w="100%" borderWidth="1px" borderRadius="lg">
        <Tabs variant="soft-rounded" colorScheme="gray">
          <TabList>
            <Tab w="50%">Sign-up</Tab>
            <Tab w="50%"> Login</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Signup/>
            </TabPanel>
            <TabPanel>
              <Login/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};
