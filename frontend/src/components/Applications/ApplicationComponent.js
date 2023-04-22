import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box } from "@chakra-ui/layout";
import ApplicationSidebar from './ApplicationSidebar';
import ApplicationBox from './ApplicationBox';

const ApplicationComponent = () => {
  const [selectedApp, setSelectedApp] = useState(""); 
  return (
    <div>
      <Box display="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {/*user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        ) */ }
        <ApplicationSidebar selectedApp={selectedApp} setSelectedApp={setSelectedApp}/>
        <ApplicationBox selectedApp={selectedApp}></ApplicationBox>
      </Box>
    </div>
  );
};

export default ApplicationComponent;
