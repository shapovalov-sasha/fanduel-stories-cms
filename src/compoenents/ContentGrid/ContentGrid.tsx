import React from "react";
import { Box, Stack } from "@mui/material";
import StoryCard from "../StoryCard/StoryCard";

const test = [1, 2, 3, 4, 5, 6];

export default function ContentGrid() {
  return (
    <Stack
      sx={{
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
        gap: 5,
      }}>
      {test.map(() => (
        <StoryCard />
      ))}
    </Stack>
  );
}
