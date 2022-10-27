import React from "react";
import { Box, Stack } from "@mui/material";
import StoryCard from "../StoryCard/StoryCard";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const test = [1, 2, 3, 4, 5, 6];

export default function ContentGrid() {
  const stories = useSelector((state: RootState) => state.stories.data);
  return (
    <Stack
      sx={{
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
        gap: 5,
      }}>
      {stories.map((item: any) => (
        <StoryCard key={item.storyId} storyDetails={item} />
      ))}
    </Stack>
  );
}
