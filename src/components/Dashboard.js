import React from "react";
import { Container, Typography, Box } from "@mui/material";
import Navbar from "./Navbar";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Box sx={{ mt: 5, textAlign: "center" }}>
          <Typography variant="h4">Welcome to the Ghost Dashboard</Typography>
          <Typography variant="subtitle1" sx={{ mt: 2 }}>This is a minimal dashboard secured with authentication.</Typography>
        </Box>
      </Container>
    </>
  );
};

export default Dashboard;

