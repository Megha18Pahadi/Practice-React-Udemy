import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box } from "@mui/material";

const CustomCarousel = (
  settings,
  trackItems = false,
  handleClick = () => {},
  handleClose = () => {}
) => {
  return (
    <div>
      <Box
        sx={{ textAlign: "center", fontSize: "24px", fontWeight: 600, p: 2 }}
      >
        Custom Carousel
      </Box>
      <Box sx={{overflow:"hidden"}}>
      <Slider {...settings} >
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
    </Box>
    </div>
  );
};

export default CustomCarousel;
