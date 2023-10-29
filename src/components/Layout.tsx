import { Center, Container, Link, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main>
        <Container>{children}</Container>
      </main>

      <footer>
        <Center mt={14} mb={4} fontSize="sm">
          <Link href="https://github.com/youjin-10" target="_blank">
            <Text>youjin-10</Text>
          </Link>
          <Text> @github</Text>
        </Center>
      </footer>
    </>
  );
};

export default Layout;
