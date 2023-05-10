import React from "react";

export default function Card() {
  return (
    <div className=" w-72 border-[1px] border-blue-800 rounded">
      <a href="#!">
        <img
          className="rounded-t-sm"
          src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
          alt=""
        />
      </a>
      <div className="flex flex-col p-6 gap-y-1">
        <h5 className="mb-2 text-xl font-medium leading-tight">Name</h5>
        <p className="bg-blue-200">Price</p>
        <p className="">Description</p>
        <p className="mb-4 text-sm leading-tight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, nisi
          eaque! Explicabo voluptates corporis, illum impedit natus officia sed
          doloribus dolor
        </p>
        <p className="text-xs">Ücretsiz aynı gün kargo</p>
      </div>
    </div>
  );
}
