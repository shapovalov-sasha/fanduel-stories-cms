import { Box, Fab } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { openModal } from "../../store/app/app.slice";
import ContentGrid from "../ContentGrid/ContentGrid";
import { getStories } from "../../store/stories/stories.slice";

export default function Dashboard() {
  const dispatch = useDispatch() as any;

  React.useEffect(() => {
    dispatch(getStories());
  }, []);

  const openAddModal = () => {
    dispatch(openModal("add"));
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        height: "100%",
        position: "relative",
      }}>
      <ContentGrid />
      <Fab
        onClick={openAddModal}
        color='primary'
        sx={{
          position: "fixed",
          bottom: 50,
          right: 50,
        }}
        aria-label='add'>
        <AddIcon />
      </Fab>
    </Box>
  );
}
