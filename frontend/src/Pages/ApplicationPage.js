import { Box } from "@chakra-ui/layout";
import { ChatState } from "../Context/ChatProvider";
import SideBar from "../components/miscellaneous/SideBar";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { useHistory } from "react-router";
import { useEffect } from "react";
import ApplicationComponent from "../components/Applications/ApplicationComponent";

const ApplicationPage = () => {
  const { user } = ChatState();
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user.role !== "admin") history.push("/dashboard");
  }, [history]); 
  
  return (
    <div style={{ width: "100%" }}>
      <SideBar/>
      <Box ml="270px">
      {user && <SideDrawer />}
      
      <Box display="flex" justifyContent="space-between" h="91.5vh" p="32px">
        {user && <ApplicationComponent></ApplicationComponent>}
      </Box>
      </Box>
    </div>
  );
};

export default ApplicationPage;
