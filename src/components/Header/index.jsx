import React from "react";
import Menu from "./Menu";
import Search from "./Search";

export default function Header() {
  return (
    <div className="w-full flex flex-col bg-white">
      <Search />
      <hr />
      <Menu />
    </div>
  );
}
