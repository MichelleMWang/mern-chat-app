import { AddIcon } from "@chakra-ui/icons";
import { Box, Stack, Text } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import { useEffect, useState } from "react";
import { getSender } from "../../config/ChatLogics";
import ChatLoading from "../ChatLoading";
import GroupChatModal from "../miscellaneous/GroupChatModal";
import { Button, IconButton } from "@chakra-ui/react";
import { ChatState } from "../../Context/ChatProvider";

const ApplicationSidebar = (props) => {
  const [loggedUser, setLoggedUser] = useState();
  //make a function that fetches all the users with the role of tutor applicant
  //const [selectedChat, setSelectedChat] = useState();
  //const { selectedChat, setSelectedChat, user, chats, setChats } = ChatState();
  //console.log(props); 
  const { selectedApp, setSelectedApp } = props;  

  const { user } = ChatState();
  const toast = useToast();

  const fetchApps = async () => {
    const response = await axios.get('/api/user/applications');
    setApps(response.data);
    //console.log("response: ", response.data)
  };

  const [apps, setApps] = useState();
  useEffect(() => {
    //setUser(JSON.parse(localStorage.getItem("userInfo")));
    fetchApps();
    // eslint-disable-next-line
  }, []); 

  return (
    <Box
      d={{ base: selectedApp ? "none" : "flex", md: "flex" }}
      flexDir="column"
      alignItems="center"
      p={3}
      bg="white"
      w={{ base: "100%", md: "31%" }}
      borderRadius="lg"
      borderWidth="1px"
    >
      <Box
        pb={3}
        px={3}
        fontSize={{ base: "16px", md: "20px" }}
        fontFamily="Work sans"
        d="flex"
        w="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        Applications
      </Box>
      <Box
        display="flex"
        flexDir="column"
        p={3}
        bg="#ebf7fc"
        w="100%"
        h="100%"
        borderRadius="lg"
        overflowY="hidden"
      >
        {apps ? (
          <Stack overflowY="scroll">
            {apps.map((app) => (
              <Box
                onClick={() => setSelectedApp(app)}
                cursor="pointer"
                bg={selectedApp === app ? "white" : "#ebf7fc"}
                color={selectedApp === app ? "black" : "black"}
                px={3}
                py={2}
                borderRadius="lg"
                key={app._id}
              >
                <Text>
                  {app.name}
                </Text>
                {app.latestMessage && (
                  <Text fontSize="xs">
                    {app.subjects}
                  </Text>
                )}
              </Box>
                ))} 
          </Stack>
        ) : (
          <ChatLoading />
        )} 
      </Box>
    </Box>
  );
};

export default ApplicationSidebar;
