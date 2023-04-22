import { FormControl } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Container } from "@chakra-ui/react";
import axios from "axios";

const SingleApplication = ({ selectedApp }) => {
    async function handleAcceptTutor() {
        try {
        const config = {
            headers: {
                "Content-type": "application/json",
            },
        };
          const response = await axios.post(`api/user/update-tutor-role`, { id: selectedApp._id }, config);
          alert('Tutor role updated successfully!');
        } catch (error) {
          console.error(error);
          alert('Error updating tutor role.');
        }
      }
    async function handleDenyTutor() {
        try {
        const config = {
            headers: {
                "Content-type": "application/json",
            },
        };
          const response = await axios.post(`api/user/update-denied-role`, { id: selectedApp._id }, config);
          alert('Denied role updated successfully!');
        } catch (error) {
          console.error(error);
          alert('Error updating denied role.');
        }
      }
  return (
    <>
      {selectedApp ? (
        <>
          <Container
            fontSize={{ base: "16px", md: "20px" }}
            pb={3}
            px={2}
            w="100%"
            fontFamily="Work sans"
            display="flex"
            flexDir="column"
            justifyContent={{ base: "space-between" }}
          >
            <Text>Name: {selectedApp.name}</Text>
            <Text>Language (other than English): {selectedApp.language}</Text>
            <Text>Comfortable teaching 8th Graders?: {selectedApp.comfortable}</Text>
            <Text>Subjects: {selectedApp.subjects}</Text>
          </Container>
          <Container display="flex">
            <Button onClick={handleDenyTutor}>Deny</Button>
            <Button onClick={handleAcceptTutor} bgColor="#71abf7" color="white" _hover={{background:"#71abf7"}} _active={{background:"#497ec4"}}>Accept</Button>
          </Container>
        </>
      ) : (
        // to get socket.io on same page
        <Box display="flex" alignItems="center" justifyContent="center" h="100%">
          <Text fontSize="3xl" pb={3} fontFamily="Work sans">
            Click on an application to view
          </Text>
        </Box>
      )}
    </>
  );
};

export default SingleApplication;