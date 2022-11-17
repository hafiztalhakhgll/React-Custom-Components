import { Container, Box } from "@mui/material";
import Feedback from "./screens/Feedback";

function App() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh"
        }}
      >
        <Feedback />
      </Box>
    </Container>
  );
}

export default App;
