import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

const commonStyles = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  border: 1,
  width: "50rem",
  height: "6rem",
  alignContent: "center",
};

const styles = {
  username: { paddingLeft: "8px", marginTop: "8px" },
  reviewText: { paddingLeft: "8px", marginTop: "6px", paddingRight: "8px" },
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
        <h5 style={styles.username}> shubathuria123</h5>
        {/* 220 max char count */}
        <p style={styles.reviewText}>
          {
            "i am in love with creamy boys. i am in love with creamy boys. i am in love with creamy boys. i am in love with creamy boys. i am in love with creamy boys. i am in love with creamy boys. i am in love with creamy boys. <3"
          }
        </p>
      </Box>
      <Box sx={{ ...commonStyles, borderRadius: "16px" }}>
        <h5 style={styles.username}> shubathuria123</h5>
        {/* 220 max char count */}
        <p style={styles.reviewText}>
          {
            "i am in love with creamy boys. i am in love with creamy boys. i am in love with creamy boys. i am in love with creamy boys. i am in love with creamy boys. i am in love with creamy boys. i am in love with creamy boys. <3"
          }
        </p>
      </Box>
      <Box sx={{ ...commonStyles, borderRadius: "16px" }}>
        <h5 style={styles.username}> shubathuria123</h5>
        {/* 220 max char count */}
        <p style={styles.reviewText}>
          {
            "i am in love with creamy boys. i am in love with creamy boys. i am in love with creamy boys. i am in love with creamy boys. i am in love with creamy boys. i am in love with creamy boys. i am in love with creamy boys. <3"
          }
        </p>
      </Box>
      <Box sx={{ ...commonStyles, borderRadius: "16px" }}>
        <h5 style={styles.username}> shubathuria123</h5>
        {/* 220 max char count */}
        <p style={styles.reviewText}>
          {
            "i am in love with creamy boys. i am in love with creamy boys. i am in love with creamy boys. i am in love with creamy boys. i am in love with creamy boys. i am in love with creamy boys. i am in love with creamy boys. <3"
          }
        </p>
      </Box>
      <Box sx={{ ...commonStyles, borderRadius: "16px" }}>
        <h5 style={styles.username}> shubathuria123</h5>
        {/* 220 max char count */}
        <p style={styles.reviewText}>
          {
            "i am in love with creamy boys. i am in love with creamy boys. i am in love with creamy boys. i am in love with creamy boys. i am in love with creamy boys. i am in love with creamy boys. i am in love with creamy boys. <3"
          }
        </p>
      </Box>
      <Box sx={{ ...commonStyles, borderRadius: "16px" }}>
        <h5 style={styles.username}> shubathuria123</h5>
        {/* 220 max char count */}
        <p style={styles.reviewText}>
          {
            "i am in love with creamy boys. i am in love with creamy boys. i am in love with creamy boys. i am in love with creamy boys. i am in love with creamy boys. i am in love with creamy boys. i am in love with creamy boys. <3"
          }
        </p>
      </Box>
      <Box sx={{ ...commonStyles, borderRadius: "16px" }}>
        <h5 style={styles.username}> shubathuria123</h5>
        {/* 220 max char count */}
        <p style={styles.reviewText}>
          {
            "i am in love with creamy boys. i am in love with creamy boys. i am in love with creamy boys. i am in love with creamy boys. i am in love with creamy boys. i am in love with creamy boys. i am in love with creamy boys. <3"
          }
        </p>
      </Box>
      <Box sx={{ ...commonStyles, borderRadius: "16px" }}>
        <h5 style={styles.username}> shubathuria123</h5>
        {/* 220 max char count */}
        <p style={styles.reviewText}>
          {
            "i am in love with creamy boys. i am in love with creamy boys. i am in love with creamy boys. i am in love with creamy boys. i am in love with creamy boys. i am in love with creamy boys. i am in love with creamy boys. <3"
          }
        </p>
      </Box>
    </Stack>
  );
}
