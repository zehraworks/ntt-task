import React from "react";

export default function Left() {
  return (
    <div class="w-full sm:w-1/2 flex flex-col gap-y-5 text-white py-10 ">
      <div>
        <h4 className="text-xl md:text-2xl font-bold">NTT DATA</h4>
        <p className="text-xs leading-none sm:text-sm">Trusted Global Innovator</p>
      </div>

      <p className="hidden sm:flex">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit
        laborum, sint in omnis qui laboriosam non modi veritatis
      </p>

      <div className="flex h-6 sm:h-10">
        <input
          type="text"
          class="bg-white w-1/2 px-3 outline-none text-xs sm:text-base"
          placeholder="Email address"
        />
        <button
          type="submit"
          class="bg-blue-950 inline-block px-6 text-xs font-normal uppercase "
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
