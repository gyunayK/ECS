import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "../search/Search";
import Card from "../Card/Card";

const WatchData = () => {
  const apikey = import.meta.env.VITE_API_KEY;
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");



  useEffect(() => {
    if(!search) return;
    const options = {
      method: "GET",
      url: `https://amazon-data-scraper126.p.rapidapi.com/search/${search}`,
      headers: {
        "X-RapidAPI-Key": apikey,
        "X-RapidAPI-Host": "amazon-data-scraper126.p.rapidapi.com",
      },
    };
  
      axios.request(options).then(function (response) {
         setData(response.data.results);
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });
  }, [search]);

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

//   const options = {
//     method: "GET",
//     url: "https://watch-database1.p.rapidapi.com/all-models-by/brandname/Rolex/family/Submariner",
//     headers: {
//       "X-RapidAPI-Key": "2de5d23f34msh9335c003b1718cap1c7996jsn1de36ae50f55",
//       "X-RapidAPI-Host": "watch-database1.p.rapidapi.com",
//     },
//   };

//   axios
//     .request(options)
//     .then(function (response) {
//     //   console.log(response.data);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
