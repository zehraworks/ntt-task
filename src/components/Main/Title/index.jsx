import React from "react";
import Heart from "../../../assets/heart.svg";

export default function Title() {
  return (
    <div className="h-24 flex items-center justify-between">
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold">Products</h1>
      <div className="flex justify-between">
        <div className="flex flex-row items-center mr-10">
          <img
            className="h-4 w-4 sm:h-6 sm:w-6 mr-1 sm:mr-3"
            src={Heart}
            alt="heart"
          />
          <p className="text-sm sm:text-lg">0 ürün</p>
        </div>
        <button className="bg-blue-800 text-white text-sm sm:text-base py-1 sm:px-3 px-2 rounded">
          Favorites
        </button>
      </div>
    </div>
  );
}
