import React from "react";
import Typography from "@mui/material/Typography";

export default function SecondaryTypographyStyle(props) {
  return (
    <>
      <Typography
        pl={2}
        pr={2}
        mt={1}
        sx={{
          fontSize: {
            md: "2rem",
            sm: "1.5rem",
            xs: "1rem",
          },
        }}
      >
        {props.text}
      </Typography>
    </>
  );
}
