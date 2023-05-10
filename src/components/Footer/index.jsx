import React from "react";
import Left from "./Left";
import Right from "./Right";
import Bottom from "./Bottom";

export default function Footer() {
  return (
    <div className="bg-blue-700">
      <div className="container mx-auto flex sm:py-10 px-6 ">
        <Left />
        <Right />
      </div>
      <hr />
      <Bottom />
    </div>
  );
}
