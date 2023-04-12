import {
    Box,
    HStack, 
    Container,
    Button, 
    Text, 
    Link
  } from "@chakra-ui/react";
  import { useEffect } from "react";
  import { useHistory } from "react-router";

function Homepage() {
    const history = useHistory();
    
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("userInfo"));
    
        if (user) history.push("/dashboard");
      }, [history]);

    const onTutorClick = () => {
        history.push("/tutorsignin")
    }
    const onStudentClick = () => {
        history.push("/studentsignin")
    }
    const onAdminClick = () => {
        history.push("/adminsignin")
    }

    return (
        <Container maxW="xl" centerContent>
            <Text fontSize="4xl" fontFamily="Work sans">
                LEAP
            </Text>
            <HStack>
                <Button onClick={onTutorClick}> I am a Tutor </Button>
                <Button onClick={onStudentClick}> I am a Student </Button>
                <Link onClick={onAdminClick}>I am Admin</Link>
            </HStack>
        </Container>
    ); 
}
export default Homepage; 