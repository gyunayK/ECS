import React, { useEffect, useState } from "react";
import axios from "axios";

import Search from "../search/Search";
import Card from "../Card/Card";
const WatchData = () => {
  const apikey = import.meta.env.VITE_ETSY_KEY;
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

 
  useEffect(() => {
    axios
      .get("http://localhost:5173/api", {
        params: {
        
          keywords: "watch",
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  

  return (
    <>
      <div className="mt-24">
        <Search setSearch={setSearch} />
        <Card data={data} search={search} />
      </div>
    </>
  );
};

export default WatchData;
