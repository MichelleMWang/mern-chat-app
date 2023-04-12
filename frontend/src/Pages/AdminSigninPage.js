import {
    Box,
    Container,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
  } from "@chakra-ui/react";
  import { useEffect } from "react";
  import { useHistory } from "react-router";
  import Login from "../components/Authentication/Login";
  import AdminSignUp from "../components/Authentication/AdminSignUp";
  import Apply from "../components/Authentication/Apply";
  
  function TutorSigninPage() {
    const history = useHistory();
  
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem("userInfo"));
  
      if (user) history.push("/dashboard");
    }, [history]);
  
    return (
      <Container maxW="xl" centerContent>
        <Box
          d="flex"
          justifyContent="center"
          p={3}
          bg="white"
          w="100%"
          m="40px 0 15px 0"
          borderRadius="lg"
          borderWidth="1px"
        >
          <Text fontSize="4xl" fontFamily="Work sans">
            LEAP Admin
          </Text>
        </Box>
        <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
          <Tabs isFitted variant="soft-rounded">
            <TabList mb="1em">
              <Tab>Login</Tab>
              <Tab>Apply</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <AdminSignUp /> 
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    );
  }
  
  export default TutorSigninPage;
  