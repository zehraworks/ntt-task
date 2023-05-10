import React from "react";
import Arrow from "../../../assets/arrow.svg";

export default function More() {
  return (
    <div className="w-full h-36 flex justify-center items-center">
      <button className="h-10 flex flex-row justify-center items-center bg-blue-800 text-white px-8 rounded">
        More
        <img className="h-5 ml-5 flex items-center" src={Arrow} alt="arrow" />
      </button>
    </div>
  );
}
