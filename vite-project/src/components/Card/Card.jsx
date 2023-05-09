import React, { useState, useEffect } from "react";
import { CardStyled, LoadingGIF } from "./Card.Styled";
import loading from "@/assets/loading.gif";

const Card = ({ data, search, handleAddToCart }) => {
  const [isLoading, setIsLoading] = useState(false);


  return (
    <>
      {isLoading ? (
        <LoadingGIF className="mt-32" src={loading} />
      ) : (
        <>
          <CardStyled key={data.id}>
            <div className="card-body">
              <p className="bg-[#000000] rounded-lg text-white font-bold px-2 py-1 text-l uppercase tracking-widest price">
                ${data.price}
              </p>

              <h1 className="card-title justify-center">
                {data.title.length > 10
                  ? data.title.slice(0, 10) + "..."
                  : data.title}
              </h1>
              <img
                className="sm:object-cover sm:h-60 sm:w-full card-img-top md:object-contain md:h-80 md:w-full"
                src={data.image}
                alt={data.title}
              ></img>
              <p className="card-text">Rating: {data.rating.rate}</p>
              <button
                className="btn"
                onClick={() =>
                  handleAddToCart(data.id, data.title, data.price, data.image)
                }
              >Add to Cart</button>
            </div>
          </CardStyled>
        </>
      )}
    </>
  );
};

export default Card;
