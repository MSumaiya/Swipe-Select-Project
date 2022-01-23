import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SwipeComponent from "./components/SwipeComponent/SwipeComponent";

function App() {
  return (
    <>
      <Box sx={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
      }}>
        <Box
          p={3}
          sx={{
            width: "100%",
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            fontWeight="500"
            color="primary"
            variant="h1"
            component="div"
            gutterBottom
          >
            Swipe Select Project
          </Typography>
        </Box>
        <SwipeComponent />
      </Box>
    </>
  );
}

export default App;
