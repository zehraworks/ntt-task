import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";
import { Carousel } from "react-responsive-carousel";

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
        <img src="/bg-1.png" alt="bg" />
      </div>
      <div>
        <img src="/bg-2.png" alt="bg" />
      </div>
    </Carousel>
  );
}
