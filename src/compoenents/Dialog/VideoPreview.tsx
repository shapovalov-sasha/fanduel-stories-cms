import React, { useState, useRef, useMemo } from "react";
import { Box, Button, Stack } from "@mui/material";
import { useDispatch } from "react-redux";
import { setFormDetails } from "../../store/app/app.slice";

export default function VideoPreview() {
  const [selectedFile, setSelectedFile] = useState<any>();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setFormDetails({ file: selectedFile }));
  }, [selectedFile]);

  const onFileChange = (e: any) => {
    setSelectedFile(e.target.files[0]);
  };

  const onUploadClick = () => {
    if (fileInputRef) {
      fileInputRef.current?.click();
    }
  };

  const fileUrl = useMemo(
    () => (selectedFile ? URL.createObjectURL(selectedFile) : undefined),
    [selectedFile]
  );

  return (
    <Stack
      sx={{
        alignItems: "center",
        height: "100%",
        justifyContent: "space-between",
      }}>
      <Button variant='outlined' onClick={onUploadClick}>
        Upload File
      </Button>

      <video controls style={{ height: "80%", width: "100%" }} src={fileUrl} />
      <input
        ref={fileInputRef}
        onChange={onFileChange}
        type='file'
        style={{
          visibility: "hidden",
        }}
        accept='video/mp4,video/x-m4v,video/*'
      />
    </Stack>
  );
}
