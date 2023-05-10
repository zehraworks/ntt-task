import React from "react";

export default function Menu() {
  return (
    <div className="container w-5/6 sm:w-full mx-auto">
      <ul className="hidden sm:flex justify-between py-3 text-sm">
        <li>Menu Item</li>
        <li>Menu Item</li>
        <li>Menu Item</li>
        <li>Menu Item</li>
        <li>Menu Item</li>
        <li>Menu Item</li>
        <li className="hidden sm:flex md:hidden">More</li>
        <li className="sm:hidden md:flex">Menu Item</li>
        <li className="sm:hidden md:flex">Menu Item</li>
        <li className="sm:hidden md:flex">Menu Item</li>
      </ul>
    </div>
  );
}
