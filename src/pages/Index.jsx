import React from "react";
import { Box, Heading, Text, Stack, Flex, Button, Image, useColorModeValue } from "@chakra-ui/react";
import { FaCode, FaGlobe, FaMobile } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Flex minHeight="100vh" alignItems="center" justifyContent="center" bg={useColorModeValue("gray.50", "gray.800")}>
        <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
          <Heading fontSize="6xl" align="center">
            Soft-Tech
          </Heading>
          <Text fontSize="xl" color="gray.600" align="center">
            Creating innovative software solutions for your business needs
          </Text>
          <Stack direction="row" spacing={4} align="center" justifyContent="center">
            <Button colorScheme="blue" size="lg">
              Get Started
            </Button>
            <Button variant="outline" colorScheme="blue" size="lg">
              Learn More
            </Button>
          </Stack>
        </Stack>
      </Flex>

      {/* Services Section */}
      <Box p={8}>
        <Heading as="h2" size="xl" mb={8} align="center">
          Our Services
        </Heading>
        <Flex justifyContent="center" flexWrap="wrap">
          <Box p={4} maxW="sm" borderWidth={1} borderRadius="lg" m={4}>
            <Flex alignItems="center" mb={4}>
              <FaCode size="2em" color="blue.500" />
              <Heading as="h3" size="lg" ml={2}>
                ERP Systems
              </Heading>
            </Flex>
            <Text>We develop robust and scalable Enterprise Resource Planning (ERP) systems to streamline your business processes.</Text>
          </Box>
          <Box p={4} maxW="sm" borderWidth={1} borderRadius="lg" m={4}>
            <Flex alignItems="center" mb={4}>
              <FaGlobe size="2em" color="blue.500" />
              <Heading as="h3" size="lg" ml={2}>
                Web Development
              </Heading>
            </Flex>
            <Text>Our team creates modern and responsive websites and web applications tailored to your business requirements.</Text>
          </Box>
          <Box p={4} maxW="sm" borderWidth={1} borderRadius="lg" m={4}>
            <Flex alignItems="center" mb={4}>
              <FaMobile size="2em" color="blue.500" />
              <Heading as="h3" size="lg" ml={2}>
                Mobile Applications
              </Heading>
            </Flex>
            <Text>We specialize in developing high-performance mobile applications for iOS and Android platforms.</Text>
          </Box>
        </Flex>
      </Box>

      {/* About Section */}
      <Box p={8} bg={useColorModeValue("gray.100", "gray.700")}>
        <Flex alignItems="center" justifyContent="space-between" flexWrap="wrap">
          <Box maxW="md" mr={8}>
            <Heading as="h2" size="xl" mb={4}>
              About Soft-Tech
            </Heading>
            <Text fontSize="lg">Soft-Tech is a leading software development company dedicated to providing cutting-edge solutions for businesses of all sizes. With our expertise in ERP systems, web development, and mobile applications, we help our clients achieve their goals and stay ahead in the digital landscape.</Text>
          </Box>
          <Image src="https://images.unsplash.com/photo-1492366254240-43affaefc3e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbXxlbnwwfHx8fDE3MTI2MTAyODV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Software Development Team" maxW="md" borderRadius="lg" />
        </Flex>
      </Box>

      {/* Contact Section */}
      <Box p={8}>
        <Heading as="h2" size="xl" mb={8} align="center">
          Contact Us
        </Heading>
        <Flex justifyContent="center">
          <Box maxW="md" borderWidth={1} borderRadius="lg" p={8}>
            <Text fontSize="xl" mb={4}>
              Ready to start your project? Get in touch with us today!
            </Text>
            <Button colorScheme="blue" size="lg">
              Contact Us
            </Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Index;
