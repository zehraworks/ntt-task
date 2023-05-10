import React from "react";
import Section from "./Section";

export default function Right() {
  return (
    <div className="hidden container w-1/2 sm:flex justify-end gap-x-16 px-6 py-10">
      <Section className="text-white" />
      <Section className="hidden md:block text-white" />
      <Section className="hidden md:block text-white" />
    </div>
  );
}
