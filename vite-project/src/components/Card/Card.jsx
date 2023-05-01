import React, { useState, useEffect } from "react";
import { CardStyled, LoadingGIF } from "./Card.Styled";
import loading from "@/assets/IMG/loading.gif";

const Card = ({ data, search }) => {
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   if (!search) return;
  //   setIsLoading(true);
  // }, [search]);

  // useEffect(() => {
  //   if (data && data.length > 0) {
  //     setIsLoading(false);
  //   }
  // }, [data]);

  return (
    <>
      {isLoading ? (
        <LoadingGIF  className="mt-32" />
      ) : (
        <>
          <CardStyled key={data.id}>
            <div className="card-body">
              <p className="bg-blue-400 rounded-lg text-white font-bold px-2 py-1 text-xs uppercase tracking-widest price">
                ${data.price}
              </p>

              <h1 className="card-title justify-center">
                {data.title.length > 10
                  ? data.title.slice(0, 10) + "..."
                  : data.title}
              </h1>
              <img
                className="sm:object-cover sm:h-60 sm:w-full card-img-top md:object-cover md:h-80 md:w-full"
                src={data.image}
              ></img>
              <p className="card-text">Date</p>
              <button className="btn"> ADD TO CART</button>
            </div>
          </CardStyled>
        </>
      )}
    </>
  );
};

export default Card;
