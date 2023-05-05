import React from "react";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/Redux/Slice/cartSlice";

function CardWrapper() {
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.store.products.data);
  const user = useSelector((state) => state);
  console.log(user);

  const handleAddToCart = (id, name, price, image) => {
    dispatch(addToCart({ id, name, price, image }));
  };

  return (
    <div className="mt-36 grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3  md:grid-cols-2 sm:grid-flow-col-1">
      {productsData &&
        productsData.map((item) => (
          <Card key={item.id} data={item} handleAddToCart={handleAddToCart} />
        ))}
    </div>
  );
}

export default CardWrapper;
