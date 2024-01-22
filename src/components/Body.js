import RestaturantCard from "./RestaturantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Shimmer from "./Shimmer";
const Body = () => {
  let [restarurantList, setRestaurantList] = useState([]);
  let [searchText, setSearchText] = useState("");
  let [masterListOfRestaturants, setMasterListOfRestaturants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const swiggyApiResp = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const respJson = await swiggyApiResp.json();
    setMasterListOfRestaturants(
      respJson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    console.log(11111111);
    console.log(respJson?.data.cards.card);
    console.log(
      respJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setRestaurantList(
      respJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    console.log(restarurantList);
  };

  console.log(restarurantList);

  return restarurantList.length === 0 ? (
    <Shimmer></Shimmer>
  ) : (
    <div>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            const filteredRestaurants = masterListOfRestaturants.filter((val) =>
              val.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setRestaurantList(filteredRestaurants);
          }}
        >
          Search
        </button>
        <button
          className="top-rated"
          onClick={() => {
            restarurantList = restarurantList.filter(
              (val) => val?.info.avgRating > 4
            );
            setRestaurantList(restarurantList);
            console.log(restarurantList);
          }}
        >
          Top rated Restaurants
        </button>
      </div>
      <div className="restaurant-list">
        {restarurantList.map((res, index) => (
          <Link key={index} to={"/restaurants/" + res.info.id}>
            <RestaturantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
