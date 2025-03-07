import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import Chatbox from "../components/Chatbox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";
import SideBar from "../components/miscellaneous/SideBar";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(true);
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      <SideBar></SideBar>
      <Box ml="270px">
      {user && <SideDrawer />}
      <Box display="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
      </Box>
    </div>
  );
};

export default Chatpage;
