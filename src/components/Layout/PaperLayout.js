import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function PaperLayout(props) {
  return (
    <>
      <Box sx={{ width: { md: "60%", sm: "75%", xs: "90%" } }}>
        <Paper elevation={3} sx={{ borderLeft: "8px solid #00817a" }}>
          {props.children}
        </Paper>
      </Box>
    </>
  );
}
