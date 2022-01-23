import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import JsonValues from "../../values/values.json";
import Typography from "@mui/material/Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import SwiperCore, { Keyboard, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Keyboard,  Navigation]);

export default function SwipeComponent() {
  return (
    <>
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
        >
          {JsonValues.map((value) => (
            <SwiperSlide key={value.id}>
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
                  backgroundColor: "primary.dark",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    opacity: [0.9, 0.8, 0.7],
                    fontSize: {
                      lg: "4.5rem",
                      md: "3.5rem",
                      sm: "3rem",
                      xs: "2.5rem",
                    },
                  },
                }}
              >
                <span>{value.num}</span>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
}
