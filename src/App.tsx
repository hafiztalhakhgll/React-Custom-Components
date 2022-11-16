import { Container, Box } from "@mui/material";
import User from "./screens/User";

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
        <User />
      </Box>
    </Container>
  );
}

export default App;
