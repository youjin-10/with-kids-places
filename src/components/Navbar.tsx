import { Box, Center, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Box>
      <Center
        py={4}
        bgColor="yellow.300"
        borderBottomWidth={1}
        borderBottomColor="blue.600"
        flexDirection="column"
      >
        <Heading fontSize="3xl">아이와 함께 맛집, 카페</Heading>
        <Text fontSize="lg" fontWeight="semibold">
          - 성동구 -
        </Text>
      </Center>
    </Box>
  );
};

export default Navbar;
