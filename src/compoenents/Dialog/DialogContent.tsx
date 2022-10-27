import React from "react";
import { Stack, Box, Paper } from "@mui/material";
import StoryDetailsForm from "./StoryDetailsForm";
import VideoPreview from "./VideoPreview";

export default function DialogContent() {
  return (
    <Stack
      direction={{ sm: "column", md: "row" }}
      alignItems='stretch'
      sx={{
        maxHeight: (theme) => `calc(100vh - 70px)`,
        gap: 5,
        padding: 2,
        height: "100%",
      }}>
      <Paper sx={{ width: "100%", flexShrink: 1, borderRadius: "12px" }}>
        <VideoPreview />
      </Paper>

      <Paper
        sx={{
          padding: 10,
          width: "100%",
          borderRadius: "12px",
        }}>
        <StoryDetailsForm />
      </Paper>
    </Stack>
  );
}
