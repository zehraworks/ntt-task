import React from "react";

export default function Left() {
  return (
    <div className="w-full sm:w-1/2 flex flex-col gap-y-5 text-white py-10 ">
      <div>
        <img className="h-10 bg-white p-1" src="/logo.svg" alt="" />
        <p className="text-xs leading-none sm:text-sm">
          Trusted Global Innovator
        </p>
      </div>

      <p className="hidden sm:flex">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit
        laborum, sint in omnis qui laboriosam non modi veritatis
      </p>

      <div className="flex h-6 sm:h-10">
        <input
          type="text"
          className="bg-white w-1/2 px-3 outline-none text-xs sm:text-base"
          placeholder="Email address"
        />
        <button
          type="submit"
          className="bg-blue-950 inline-block px-6 text-xs font-normal uppercase "
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
