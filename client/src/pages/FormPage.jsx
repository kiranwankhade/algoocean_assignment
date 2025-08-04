import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Text,
  Button,
  Input,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Flex,
} from "@chakra-ui/react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

const FormPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const toast = useToast();

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.dob) {
      newErrors.dob = "Date of birth is required";
    } else if (new Date(formData.dob) >= new Date()) {
      newErrors.dob = "Date must be in the past";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (
      (name === "firstName" || name === "lastName") &&
      /[^a-zA-Z\s]/.test(value)
    ) {
      return; // block non-letters
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };
  const handleSubmit = async () => {
    if (!validate()) return;
    try {
      await axios.post("https://algoocean-assignment.onrender.com/api/user", formData);
      toast({
        title: "Form submitted.",
        description: "User data saved successfully.",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      }).then(
        navigate("/display"));
      
      console.log("userData", formData);
      // Clear form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        dob: "",
      });
      setErrors({});
    } catch (error) {
      console.log("Error saving user data");
    }
  };

  return (
    <Flex
      minH="100vh"
      bgImage={`url(${require("../algoo-bg2.jpeg")})`}
      bgSize="cover"
      backdropFilter="blur(1.5px)"
      bgPosition="center"
      align="center"
      justify="center"
      px={4}
      //   fontFamily={'cursive'}
    >
      <Box
        bg="rgba(255, 255, 255, 0.05)" // Transparent glass look
        backdropFilter="blur(2.5px)"
        color="#00203F"
        borderRadius="xl"
        p={8}
        maxW="md"
        w="full"
        boxShadow="rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"
        // border="1px solid rgba(255,255,255,0.1)"
      >
        <Heading size="lg" textAlign="center" mb={2} fontFamily={"serif"}>
          User Form
        </Heading>
        <Text textAlign="center" mb={6} fontSize="sm">
          Please fill in your details below
        </Text>
        <VStack spacing={6}>
          <FormControl isInvalid={!!errors.firstName}>
            <FormLabel fontWeight="semibold">First Name</FormLabel>
            <Input
              name="firstName"
              type="text"
              placeholder="Enter first name"
              value={formData.firstName}
              onChange={handleChange}
              variant="unstyled"
              borderBottom="2.5px solid #0471DE"
              borderRadius="0"
              _placeholder={{ color: "grey" }}
              _focus={{ borderBottom: "2px solid #0471DE", boxShadow: "none" }}
              _hover={{ borderBottom: "2px solid #0471DE", boxShadow: "none" }}
              color="#03396E"
              _autofill={{
                boxShadow: "0 0 0px 1000px rgba(255, 255, 255, 0.05) inset",
                WebkitTextFillColor: "#03396E",
                transition: "background-color 5000s ease-in-out 0s",
              }}
            />
            <FormErrorMessage>{errors.firstName}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.lastName}>
            <FormLabel fontWeight="semibold">Last Name</FormLabel>
            <Input
              name="lastName"
              placeholder="Enter last name"
              value={formData.lastName}
              onChange={handleChange}
              variant="unstyled"
              borderBottom="2.5px solid #0471DE"
              borderRadius="0"
              _placeholder={{ color: "grey" }}
              _focus={{ borderBottom: "2px solid #0471DE", boxShadow: "none" }}
              _hover={{ borderBottom: "2px solid #0471DE" }}
              color="#03396E"
              _autofill={{
                boxShadow: "0 0 0px 1000px rgba(255, 255, 255, 0.05) inset",
                WebkitTextFillColor: "#03396E",
                transition: "background-color 5000s ease-in-out 0s",
              }}
            />
            <FormErrorMessage>{errors.lastName}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.dob}>
            <FormLabel fontWeight="semibold">Date of Birth</FormLabel>
            <Input
              name="dob"
              type="date"
              value={formData.dob}
              onChange={handleChange}
              variant="unstyled"
              borderBottom="2px solid #0471DE"
              borderRadius="0"
              color={formData.dob ? "#03396E" : "grey"}
              _focus={{ borderBottom: "2px solid #0471DE", boxShadow: "none" }}
              _hover={{ borderBottom: "2px solid #0471DE" }}
            />

            <FormErrorMessage>{errors.dob}</FormErrorMessage>
          </FormControl>

          <Button
            bg="#00203F"
            color="white"
            _hover={{ bg: "#0471DE" }}
            w="full"
            onClick={handleSubmit}
            fontWeight="bold"
          >
            Submit
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
};

export default FormPage;
