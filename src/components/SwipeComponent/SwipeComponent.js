import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import JsonValues from "../../values/values.json";
import Typography from "@mui/material/Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import classes from "./SwipeComponent.module.css";
import Button from "@mui/material/Button";

import SwiperCore, { Keyboard, Navigation, Mousewheel } from "swiper";

// install Swiper modules
SwiperCore.use([Keyboard, Navigation, Mousewheel]);

export default function SwipeComponent() {
  const [clickValue, setClickValue] = useState("");
  /* const [numStyle, setNumStyle] = useState(false); */
  const [test, setTest] = useState("");
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    setClickValue(sessionStorage.getItem("key"));
    clickValue && console.log("clickValue:", clickValue);
    /* numStyle && setNumStyle(!numStyle ) */
  }, [clickValue]);

  const handleSwiperSlideClick = (event) => {
    event.preventDefault();
    sessionStorage.setItem("key", event.target.innerText);
    setTest(event.target.innerText);
    /* console.log("numStyle :", !numStyle ) */
    //setEdit(false);
  };

  const handleEdit = () => {
    setEdit(true);
  };

  const updateEdit = () => {
    setClickValue(setTest);
    setEdit(false);
  }

  return (
    <>
      <Box >
        <Typography
          sx={{
            fontSize: { lg: "4rem", md: "3rem", sm: "2.5rem", xs: "2rem" },
          }}
        >
          Current Selection: {clickValue} Sek/month
        </Typography>
        <Box mt={2} p={2} sx={{
          display:"flex",
          justifyContent: "end",
          alignItems:"center",
        }}>
          <Button onClick={handleEdit} variant="contained">
            Edit
          </Button>
        </Box>
      </Box>
      {edit && (
        <Box
          sx={{
            flexGrow: 1,
            width: { lg: "50%", md: "50%", sm: "80%", xs: "90%" },
          }}
        >
          <Swiper
            slidesPerView={5}
            spaceBetween={0}
            keyboard={{
              enabled: true,
            }}
            navigation={true}
            mousewheel={true}
          >
            {JsonValues.map((value) => (
              <SwiperSlide key={value.id} onClick={handleSwiperSlideClick}>
                <Box
                  m={5}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: {
                      lg: "4rem",
                      md: "3rem",
                      sm: "2.5rem",
                      xs: "2rem",
                    },
                  }}
                >
                  {/* {numStyle ? <span className={classes.test1}>{value.num}</span> : <span>{value.num}</span>} */}
                  <span>{value.num}</span>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
          <Typography variant="h4">You can swipe from above list. After select a value you need to press update button below.</Typography>
          <Box mt={2} p={2} sx={{
            display:"flex",
            justifyContent: "end",
            alignItems:"center",
          }}>
            <Button onClick={updateEdit} variant="contained">
              Update
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
}
