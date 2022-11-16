import { Container, Box } from "@mui/material";
import Table from "./components/table";

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
        <Table />
      </Box>
    </Container>
  );
}

export default App;
