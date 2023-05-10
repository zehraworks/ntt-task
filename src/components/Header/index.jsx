import React from "react";
import Menu from "./Menu";
import Search from "./Search";
import Photo from "../Photo";

export default function Header() {
  return (
    <div className="w-full flex flex-col bg-white">
      <Search />
      <hr />
      <Menu />
    </div>
  );
}
