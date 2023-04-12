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
    if (!user.isAdmin) history.push("/dashboard");
  }, [history]);
  
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer></SideDrawer>}
      <SideBar/>
      <Box ml="270px" display="flex" justifyContent="space-between" w="100%" h="91.5vh" p="32px">
        {user && <div>hi {user.name}! 👋 </div>}
      </Box>
      <ApplicationComponent></ApplicationComponent>
    </div>
  );
};

export default ApplicationPage;
