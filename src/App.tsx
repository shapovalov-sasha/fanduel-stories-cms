import * as React from "react";

import { Typography, Box, Container } from "@mui/material";
import Dashboard from "./compoenents/dashboard/Dashboard";
import SearchAppBar from "./compoenents/AppBar/AppBar";
import FullScreenDialog from "./compoenents/Dialog/Dialog";

export default function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}>
      <SearchAppBar />
      <Container
        maxWidth='lg'
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          py: 5,
        }}>
        <Dashboard />
      </Container>
      <FullScreenDialog />
    </Box>
  );
}
