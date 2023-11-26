import Ratings from "./Ratings";
import { CDN_URL } from "../utils/constant";
const RestaturantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    sla: { slaString },
    costForTwo,
  } = resData?.info;
  const  backgroundImage= `${CDN_URL}${cloudinaryImageId}`;
  return (
    <div className="card">
    <img src={backgroundImage} />
    <h2>{name}</h2>
    <h5>{cuisines.join(", ")}</h5>
    {/* <h6>{area}</h6> */}
    <span>
      <h4
        style={
          avgRating < 4 ? { backgroundColor: "red" } : { color: "white" }
        }
      >
        <i className="fa-solid fa-star"></i>
        {avgRating}
      </h4>
      <h4>{slaString}</h4>
      <h4>{    costForTwo}</h4>
    </span>
  </div>
  );
};

export default RestaturantCard;
