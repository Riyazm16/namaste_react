import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const restaurantDetails = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.577970439366293&lng=73.81217490881683&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await restaurantDetails.json();
    setRestaurantInfo(json);
  };

  if (restaurantInfo === null) {
    return <Shimmer></Shimmer>;
  }
  //   console.log(restaurantInfo);
  const { name, cloudinaryImageId, costForTwo, cuisines } =
    restaurantInfo?.data?.cards[0]?.card?.card?.info;
  //   console.log(restaurantInfo?.data?.cards[2]);
  const { itemCards } =
    restaurantInfo?.data?.cards[2]?.groupedCard?.cardGroupMap.REGULAR.cards[1]
      .card.card;
  console.log(itemCards);
  return (
    <div className="restaturant-menu">
      <h1>{name}</h1>
      <h3>
        {cuisines.join(",")} - {costForTwo / 100}
      </h3>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item, key) => (
          <li key={key}>
            {item?.card.info.name} - Rs. {item?.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
