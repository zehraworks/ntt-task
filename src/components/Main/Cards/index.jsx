import React from "react";
import Card from "./Card";

export default function Cards() {
  return (
    <div className="flex justify-center gap-x-5 gap-y-3 flex-wrap">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
