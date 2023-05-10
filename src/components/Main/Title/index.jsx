import React from "react";
import Heart from "../../../assets/heart.svg";

export default function Title() {
  return (
    <div className="h-24 flex items-center justify-between">
      <h1 className="text-2xl font-bold">Products</h1>
      <div className="flex justify-between">
        <div className="flex flex-row items-center mr-10">
          <img className="h-6 w-6 mr-3" src={Heart} alt="heart" />
          <p>0 ürün</p>
        </div>
        <button className="bg-blue-800 text-white px-3 py-1 rounded">
          Favorites
        </button>
      </div>
    </div>
  );
}
