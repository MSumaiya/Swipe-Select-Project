import React from "react";
import Box from "@mui/material/Box";
import ProjectHeader from "./components/ProjectHeader/ProjectHeader";
import SwipeComponent from "./components/SwipeComponent/SwipeComponent";
import AppStyle from "./app.style";

function App() {
  const classes = AppStyle();
  return (
    <>
      <Box className={classes.appWraper}>
        <ProjectHeader />
        <SwipeComponent />
      </Box>
    </>
  );
}

export default App;