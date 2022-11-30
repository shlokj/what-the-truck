import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

const commonStyles = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  m: 1,
  border: 1,
  width: "50rem",
  height: "5rem",
  alignContent: "center",
};

export default function ReviewsList() {
  return (
    <Stack
      spacing={2}
      marginTop={6}
      // alignContent={"center"}
      // justifyContent={"center"}
    >
      <Box sx={{ ...commonStyles, borderRadius: "16px" }}>
        <h2> helo</h2>
      </Box>
      <Box sx={{ ...commonStyles, borderRadius: "16px" }} />
      <Box sx={{ ...commonStyles, borderRadius: "16px" }} />
      <Box sx={{ ...commonStyles, borderRadius: "16px" }} />
      <Box sx={{ ...commonStyles, borderRadius: "16px" }} />
      <Box sx={{ ...commonStyles, borderRadius: "16px" }} />
    </Stack>
  );
}
