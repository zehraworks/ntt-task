import React from "react";
import { addFavorite } from "../../../../redux/productsSlice";
import { useDispatch } from "react-redux";

export default function Card({
  id,
  name,
  description,
  imageUrl,
  price,
  shippingMethod,
  isFavorited,
}) {
  const dispatch = useDispatch();

  const toggleFavorite = (id) => {
    dispatch(addFavorite({ id }));
  };

  return (
    <div className="w-full sm:w-32 md:w-1/2 lg:w-1/4 border-[1px] border-blue-800 rounded relative">
      <button
        onClick={() => toggleFavorite(id)}
        className={`${
          isFavorited ? "bg-pink-200" : "bg-slate-100"
        } absolute flex justify-center items-center rounded-full  w-12 h-12 right-1 top-1`}
      >
        <img src="/src/assets/heart.svg" alt="fav" />
      </button>
      <img className="rounded-t-sm" src={imageUrl} alt="" />

      <a href={imageUrl} target="_blank">
        <div className="flex flex-col p-6 gap-y-1">
          <h5 className="mb-2 text-lg sm:text-xl font-medium leading-tight">
            {name}
          </h5>
          <p className="bg-blue-200">{price}</p>
          <p className="mb-4 text-sm leading-tight line-clamp-2">
            {description}
          </p>
          <p className="text-xs">{shippingMethod}</p>
        </div>
      </a>
    </div>
  );
}
