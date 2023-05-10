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
        <li className="hidden sm:flex lg:hidden">More</li>
        <li className="sm:hidden lg:flex">Menu Item</li>
        <li className="sm:hidden lg:flex">Menu Item</li>
        <li className="sm:hidden lg:flex">Menu Item</li>
      </ul>
    </div>
  );
}
