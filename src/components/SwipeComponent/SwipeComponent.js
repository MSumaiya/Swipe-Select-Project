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
import EuroSymbolIcon from "@mui/icons-material/EuroSymbol";

import SwiperCore, {
  Keyboard,
  Navigation,
  Mousewheel,
  Pagination,
} from "swiper";
import "swiper/css";
import "swiper/css/pagination";

// install Swiper modules
SwiperCore.use([Keyboard, Navigation, Mousewheel, Pagination]);

export default function SwipeComponent() {
  const [clickValue, setClickValue] = useState("");
  /* const [numStyle, setNumStyle] = useState(false); */
  const [selectValue, setSelectValue] = useState("");
  const [edit, setEdit] = useState(false);
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    setClickValue(sessionStorage.getItem("key"));
    clickValue && console.log("clickValue:", clickValue);
    /* numStyle && setNumStyle(!numStyle ) */
  }, [clickValue]);

  const handleSwiperSlideClick = (event) => {
    event.preventDefault();
    sessionStorage.setItem("key", event.target.innerText);
    setSelectValue(event.target.innerText);
    /* console.log("numStyle :", !numStyle ) */
    //setEdit(false);
  };

  const handleEdit = () => {
    setEdit(true);
    setDisplay(false);
  };

  const updateEdit = () => {
    setClickValue(setSelectValue);
    setEdit(false);
    setDisplay(true);
  };

  return (
    <>
      {display && (
        <Box sx={{ width: { md: "60%", sm: "75%", xs: "90%" } }}>
          <Paper elevation={3} sx={{ borderLeft: "8px solid #00817a" }}>
            <Box
              pl={2}
              pr={2}
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      lg: "6rem",
                      md: "5rem",
                      sm: "4rem",
                      xs: "3rem",
                    },
                    fontWeight: "bolder",
                    color: "#474747" /* 5b5959 */,
                  }}
                >
                  {clickValue}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                >
                  <EuroSymbolIcon
                    sx={{
                      fontSize: {
                        lg: "4rem",
                        md: "3rem",
                        sm: "3rem",
                        xs: "2.5rem",
                      },
                      color: "#5b5959",
                    }}
                  ></EuroSymbolIcon>
                  <Typography
                    sx={{
                      fontSize: {
                        lg: "4rem",
                        md: "3rem",
                        sm: "3rem",
                        xs: "2.5rem",
                      },
                      color: "#5b5959",
                    }}
                  >
                    /Month
                  </Typography>
                </Box>
              </Box>
              <Box
                mt={2}
                p={2}
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                }}
              >
                <Button fullWidth onClick={handleEdit} variant="contained">
                  <Typography
                    sx={{
                      fontSize: {
                        sm: "2rem",
                        xs: "1.5rem",
                      },
                    }}
                  >
                    Edit
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Paper>
        </Box>
      )}

      {edit && (
        <>
          <Box
            sx={{
              flexGrow: 1,
              width: { lg: "50%", md: "50%", sm: "80%", xs: "90%" },
            }}
          >
            <Paper elevation={3} sx={{ borderLeft: "8px solid #00817a" }}>
              <Swiper
                slidesPerView={5}
                spaceBetween={0}
                keyboard={{
                  enabled: true,
                }}
                navigation={true}
                mousewheel={true}
                pagination={{
                  clickable: true,
                }}
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
              <Typography variant="h4">
                You can swipe from above list. After select a value you need to
                press update button below.
              </Typography>
              <Box
                  mt={2}
                  p={2}
                  sx={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                  }}
                >
                <Button fullWidth onClick={updateEdit} variant="contained">
                <Typography
                    sx={{
                      fontSize: {
                        sm: "2rem",
                        xs: "1.5rem",
                      },
                    }}
                  >
                    Update
                  </Typography>
                </Button>
              </Box>
            </Paper>
          </Box>
        </>
      )}
    </>
  );
}
