import { Box } from "@chakra-ui/layout";
import { ChatState } from "../Context/ChatProvider";
import SideBar from "../components/miscellaneous/SideBar";
import SideDrawer from "../components/miscellaneous/SideDrawer";

const Dashboard = () => {
  const { user } = ChatState();
  
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer></SideDrawer>}
      <SideBar/>
      <Box ml="270px" p="32px">{user && <div>hi {user.name}! 👋 </div>}</Box>
      <Box ml="270px" display="flex" justifyContent="space-between" w="100%" h="91.5vh" p="32px">
        
      </Box>
    </div>
  );
};

export default Dashboard;
