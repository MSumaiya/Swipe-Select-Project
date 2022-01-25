import React from "react";
import Typography from "@mui/material/Typography";

export default function TypographyStyle(props) {
  return (
    <>
      <Typography
        sx={{
          fontSize: {
            lg: "3.5rem",
            md: "2.5rem",
            sm: "2rem",
            xs: "1.8rem",
          },
          fontWeight: "bolder",
          color: "#474747",
        }}
      >
        {props.text}
      </Typography>
    </>
  );
}
