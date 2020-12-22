import React from "react";
import { Box, Flex, useColorMode } from "@chakra-ui/react";
import styles from "./App.module.css";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

function App() {
  const { colorMode } = useColorMode();
  const color = {
    light: "nebula.500",
    dark: "nebula.300",
  };
  return (
    <Box>
      <Flex justifyContent="flex-end">
        <ColorModeSwitcher m={3} />
      </Flex>
      <Flex
        className={styles.app}
        minH="100vh"
        fontSize="calc(10px + 2vmin)"
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box color={color[colorMode]}>react-ts-chakra-ui</Box>
      </Flex>
    </Box>
  );
}

export default App;
