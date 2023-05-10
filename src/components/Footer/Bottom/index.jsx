import React from "react";
import Social from "./Social";

export default function Bottom() {
  return (
    <div className="container mx-auto py-4 flex justify-between text-white text-sm">
      <p>contact@nttdata.com</p>
      <p>+39 876 765 44 44</p>
      <Social/>
    </div>
  );
}
