import React from "react";
import Category from "./Category";

export default function Search() {
  return (
    <div className="container mx-auto w-5/6 sm:w-full flex flex-col sm:flex-row justify-between py-5">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-800">NTT DATA</h1>
        <svg
          className="flex sm:hidden w-6 h-6 "
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>

      <div className="w-full sm:w-5/6 flex justify-between mt-3 sm:mt-0">
        <div class="sm:w-3/4 flex justify-between grow sm:grow-0 border-[1px] border-solid border-neutral-300 rounded">
          <input
            type="search"
            className="bg-transparent px-3 py-[0.25rem] text-base font-normal  text-neutral-700 outline-offset-0"
            placeholder="Search"
          />
          <Category />
        </div>
        <button className="bg-blue-800 text-white rounded border-[1px] border-blue-800 px-6 py-2 text-xs">
          Search
        </button>
      </div>
    </div>
  );
}
