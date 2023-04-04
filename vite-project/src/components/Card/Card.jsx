import React, { useState, useEffect } from "react";
import { CardStyled, LoadingGIF } from "./Card.Styled";
import loading from "@/assets/IMG/loading.gif";

const Card = ({ data, search }) => {
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    if (!search) return;
    setIsLoading(true);
  }, [search]);

  useEffect(() => {
    if (data && data.length > 0) {
      setIsLoading(false);
    }
  }, [data]);

  return (
    <>
      {isLoading ? (
        <LoadingGIF src={loading} className="mt-32" />
      ) : (
        <div className="mt-31 grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3  md:grid-cols-2 sm:grid-flow-col-1">
          {data?.map((item, index) => (
            <CardStyled key={index}>
              <div className="card-body">

                {item.price_string ? (
                  item.price_string.split("$").map((price) => (
                    <p
                      key={price}
                      className="bg-blue-400 rounded-lg text-white font-bold px-2 py-1 text-xs uppercase tracking-widest price"
                    >
                      {price !== "0.00" ? `$${price}` : "N/A"}
                    </p>
                  ))
                ) : (
                  <p className="bg-blue-400 rounded-lg text-white font-bold px-2 py-1 text-xs uppercase tracking-widest price">
                    N/A
                  </p>
                )}
                <h1 className="card-title justify-center">
                  {item.name.length > 10
                    ? item.name.slice(0, 10) + "..."
                    : item.name}
                </h1>
                <img
                  className="sm:object-cover sm:h-60 sm:w-full card-img-top md:object-cover md:h-80 md:w-full"
                  src={item.image}
                ></img>
                <p className="card-text">Date</p>
                <button className="btn"> Select</button>
              </div>
            </CardStyled>
          ))}
        </div>
      )}
    </>
  );
};

export default Card;
