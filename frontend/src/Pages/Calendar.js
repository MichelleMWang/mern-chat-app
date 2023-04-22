import { ChatState } from "../Context/ChatProvider";
import { Box } from "@chakra-ui/layout";
import SideBar from "../components/miscellaneous/SideBar";
import SideDrawer from "../components/miscellaneous/SideDrawer";

const Calendar = () => {
    const { user } = ChatState();
    return (
        <div style={{ width: "100%" }}>
        {user && <SideDrawer></SideDrawer>}
        <SideBar/>
        <Box ml="270px" p="32px">Calendar Page Coming Soon!</Box>
      </div>
    );
  };
  
  export default Calendar;