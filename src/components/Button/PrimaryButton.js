import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';

export default function PrimaryButton(props) {
  return <>
    <Box
      mt={2}
      p={2}
      sx={{
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
      }}
    >
      <Button fullWidth onClick={props.onClick} variant="contained">
        <Typography
          sx={{
            fontSize: {
              md: "1.8rem",
              xs: "1.5rem",
            },
          }}
        >
          {props.buttonName}
        </Typography>
      </Button>
    </Box>
  </>;
}
