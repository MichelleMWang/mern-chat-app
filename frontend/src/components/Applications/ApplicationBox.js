import { Box } from "@chakra-ui/layout";
import { ChatState } from "../../Context/ChatProvider";
import SingleApplication from "./SingleApplication";

const Applicationbox = ({ selectedApp }) => {
  //console.log(selectedApp); 
  return (
    <Box
      d={{ base: selectedApp ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      p={3}
      bg="white"
      w={{ base: "100%", md: "68%" }}
      borderRadius="lg"
      borderWidth="1px"
    >
      <SingleApplication selectedApp={selectedApp} />
    </Box>
  );
};

export default Applicationbox;
