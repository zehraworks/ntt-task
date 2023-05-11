import React from "react";
import Category from "./Category";
import TemporaryDrawer from "./Drawer";
import searchIcon from "../../../assets/search.svg"

export default function Search() {
  return (
    <div className="container mx-auto w-5/6 sm:w-full flex flex-col sm:flex-row justify-between py-5">
      <div className="flex sm:mr-10 justify-between items-center">
        <img className="h-6 sm:h-8" src="/logo.svg" alt="" />

        <div className="flex justify-center items-center sm:hidden w-6 h-6 ">
          <TemporaryDrawer />
        </div>
      </div>

      <div className="w-full sm:w-5/6 flex justify-between mt-3 sm:mt-0">
        <div className="sm:w-3/4 flex justify-between grow sm:grow-0 border-[1px] border-solid border-neutral-300 rounded">
          <input
            type="search"
            className="bg-transparent px-3 py-[0.25rem] text-base font-normal  text-neutral-700 outline-offset-0 w-full"
            placeholder="Search"
          />
          <Category />
        </div>
        <button className="bg-blue-800 rounded border-[1px] border-blue-800 px-6 py-2 text-xs">
          <img src={searchIcon}  />
        </button>
      </div>
    </div>
  );
}
