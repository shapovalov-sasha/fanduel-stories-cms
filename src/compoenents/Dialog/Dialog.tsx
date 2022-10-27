import React, { forwardRef } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { closeModal } from "../../store/app/app.slice";
import DialogContent from "./DialogContent";
import { uploadStory } from "../../store/stories/stories.slice";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const isOpen = useSelector((state: RootState) => state.app.ui.modal.isOpen);
  const dispatch = useDispatch() as any;

  const handleClose = () => {
    dispatch(closeModal());
  };

  const onSaveClick = () => {
    dispatch(uploadStory());
    // handleClose();
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={isOpen}
        onClose={handleClose}
        TransitionComponent={Transition}>
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge='start'
              color='inherit'
              onClick={handleClose}
              aria-label='close'>
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant='h6' component='div'>
              Sound
            </Typography>
            <Button autoFocus color='inherit' onClick={onSaveClick}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <DialogContent />
      </Dialog>
    </div>
  );
}
