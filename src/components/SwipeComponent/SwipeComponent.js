import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import JsonValues from "../../values/values.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import EuroSymbolIcon from "@mui/icons-material/EuroSymbol";
import PaperLayout from "../Layout/PaperLayout";
import SwipeComponentStyle from "./SwipeComponent.styles";
import TypographyStyle from "../TypographyStyle/TypographyStyle";

import SwiperCore, {
  Keyboard,
  Navigation,
  Mousewheel,
  Pagination,
} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import PrimaryButton from "../Button/PrimaryButton";
import SecondaryTypographyStyle from "../TypographyStyle/SecondaryTypographyStyle";
SwiperCore.use([Keyboard, Navigation, Mousewheel, Pagination]);

export default function SwipeComponent() {
  const [clickValue, setClickValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [edit, setEdit] = useState(false);
  const [display, setDisplay] = useState(true);
  const classes = SwipeComponentStyle();

  useEffect(() => {
    setClickValue(sessionStorage.getItem("key"));
    clickValue && console.log("clickValue:", clickValue);
  }, [clickValue]);

  const handleSwiperSlideClick = (event) => {
    event.preventDefault();
    sessionStorage.setItem("key", event.target.innerText);
    setSelectValue(event.target.innerText);
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
        <PaperLayout>
          <Box pl={2} pr={2} className={classes.editBoxPrimaryStyle}>
            <Box className={classes.editBoxSecondaryStyle}>
              <TypographyStyle text={clickValue} />
              <Box className={classes.editBoxTirtiaryStyle}>
                <EuroSymbolIcon
                  sx={{
                    fontSize: {
                      lg: "3.5rem",
                      md: "2.5rem",
                      sm: "2rem",
                      xs: "1.8rem",
                    },
                    color: "#5b5959",
                  }}
                ></EuroSymbolIcon>
                <TypographyStyle text="/Month" />
              </Box>
            </Box>
            <PrimaryButton onClick={handleEdit} buttonName="Edit" />
          </Box>
        </PaperLayout>
      )}

      {edit && (
        <>
          <PaperLayout>
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
                    className={classes.updateBoxPrimaryStyle}
                    m={5}
                    sx={{
                      fontSize: {
                        lg: "3.5rem",
                        md: "2.5rem",
                        sm: "2rem",
                        xs: "1.8rem",
                      },
                    }}
                  >
                    <span>{value.num}</span>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
            <SecondaryTypographyStyle text="You can swipe above list. After selecting a value you need to press update button also to see the changes." />
            <PrimaryButton onClick={updateEdit} buttonName="Update" />
          </PaperLayout>
        </>
      )}
    </>
  );
}
