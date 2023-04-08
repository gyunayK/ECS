import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "../search/Search";
import Card from "../Card/Card";
const WatchData = () => {
  const apikey = import.meta.env.VITE_ETSY_KEY;
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  console.log(apikey);

  useEffect(() => {
 
    axios
  .get("https://openapi.etsy.com/v3/application/listings/active", {

     headers: {
      "x-api-key": apikey,
      "Access-Control-Allow-Origin": "*",
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'

    },
    params: {  
      limit: 20, // optional, limits the number of results returned
      keywords: "watch", // optional, searches for listings containing this keyword
    },
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
  });

  return (
    <>
      <div className="mt-24">
        <Search setSearch={setSearch}/>
        <Card data={data} search={search}/>
      </div>
    </>
  );
};

export default WatchData;
