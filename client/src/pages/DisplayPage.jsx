import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Image,
  Text,
  VStack,
  Spinner,
  Flex,
  Heading,
  Divider,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const calculateAge = (dob) => {
  const birthDate = new Date(dob);
  const ageDiff = Date.now() - birthDate.getTime();
  const ageDate = new Date(ageDiff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const DisplayPage = () => {
  const [user, setUser] = useState(null);
  const [dogImage, setDogImage] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRes = await axios.get("http://localhost:8000/api/user");
        const dogRes = await axios.get("https://dog.ceo/api/breeds/image/random");
        setUser(userRes.data);
        setDogImage(dogRes.data.message);
        setLoading(false);
      } catch {
        alert("Error loading data");
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <Flex
        minH="100vh"
        align="center"
        justify="center"
        bgImage={`url(${require("../algoo-bg2.jpeg")})`}
        bgSize="cover"
        bgPosition="center"
        backdropFilter="blur(2px)"
      >
        <Spinner size="xl" color="#0471DE" />
      </Flex>
    );
  }

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bgImage={`url(${require("../algoo-bg2.jpeg")})`}
      bgSize="cover"
      bgPosition="center"
      px={4}
      backdropFilter="blur(2px)"
    >
      <Box
        bg="rgba(255, 255, 255, 0.05)"
        backdropFilter="blur(3px)"
        color="#00203F"
        borderRadius="xl"
        p={8}
        maxW="md"
        w="full"
        boxShadow="rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"
        textAlign="center"
      >
        <Image
          src={dogImage}
          alt="Profile"
          borderRadius="full"
          boxSize="180px"
          objectFit="cover"
          mx="auto"
          mb={4}
          border="2px solid #ADEFD1"
        />
        <Heading  size="lg" mb={2} fontFamily="serif">
          {user.firstName} {user.lastName}
        </Heading>
        <Divider borderColor="#0471DE" my={4} />
        <VStack spacing={2} align="start" >
          <Text><strong>First Name:</strong> {user.firstName}</Text>
          <Text><strong>Last Name:</strong> {user.lastName}</Text>
          <Text><strong>Date of Birth:</strong> {user.dob}</Text>
          <Text><strong>Age:</strong> {calculateAge(user.dob)} years</Text>
        </VStack>
        <Button
          mt={6}
          w="full"
          bg="#00203F"
          color="white"
          _hover={{ bg: "#0471DE" }}
          onClick={() => navigate("/")}
        >
          Go Back
        </Button>
      </Box>
    </Flex>
  );
};

export default DisplayPage;
