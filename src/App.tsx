import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import styles from "./App.module.css";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

function App() {
  return (
    <Box>
      <Flex justifyContent="flex-end">
        <ColorModeSwitcher m={3} />
      </Flex>
      <Box className={styles.app}>
        <Box>react-ts-chakra-ui</Box>
      </Box>
    </Box>
  );
}

export default App;
