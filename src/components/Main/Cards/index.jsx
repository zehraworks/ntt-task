import React, { useEffect } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/productsSlice";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Cards({ isFiltered }) {
  const products = useSelector((state) => state.products.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="flex justify-center gap-x-5 gap-y-3 flex-wrap">
      {isFiltered == false
        ? products.map((product) => (
            <div key={product.id}>
              <Card {...product} />
            </div>
          ))
        : products
            .filter((product) => product.isFavorited)
            .map((product) => (
              <div key={product.id}>
                <Card {...product} />
              </div>
            ))}
    </div>
  );
}
