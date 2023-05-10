import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import Bg1 from "../../../public/bg-1.png";
import Bg2 from "../../../public/bg-2.png";

export default function Slider() {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      useKeyboardArrows
    >
      <div>
        <img src={Bg1} alt="bg" />
      </div>
      <div>
        <img src={Bg2} alt="bg" />
      </div>
    </Carousel>
  );
}
