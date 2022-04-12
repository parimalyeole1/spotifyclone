import { Box } from "@chakra-ui/layout";
import Sidebar from "./Sidebar";

const PlayerLayout = ({ children }) => {
  return (
    <Box height="100vh" width="100vw">
      <Box position="absolute" top="0" left="0" width="250px">
        <Sidebar />
      </Box>
      <Box marginLeft="250px" marginBottom="100px">
        {children}
      </Box>
      <Box position="absolute" left="0" bottom="0">
        Players
      </Box>
    </Box>
  );
};

export default PlayerLayout;
