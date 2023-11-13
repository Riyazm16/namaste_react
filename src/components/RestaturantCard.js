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
  const divStyle = {
    backgroundImage: `url(${CDN_URL}${cloudinaryImageId})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div class="flex items-center  justify-center   from-[#F9F5F3] via-[#F9F5F3] to-[#F9F5F3] bg-gradient-to-br px-2 :hover cursor-pointer ">
      <div class="w-full max-w-md mt-32 mx-auto bg-white rounded-3xl shadow-xl overflow-hidden  hover:shadow-indigo-500/40">
        <div class="max-w-md mx-auto">
          <div className="h-[236px]" style={divStyle}></div>
          <div className="p-4 sm:p-6">
            <p className="font-bold text-gray-700 text-[22px] leading-7 mb-1">
              {name}
            </p>
            <p className="text-[17px] font-bold text-[#0FB478]">{costForTwo}</p>
            <p className="text-[#7C7C80] font-[15px] mt-6">
              {cuisines.join(", ")}
            </p>
            <a
              target="_blank"
              href="foodiesapp://food/1001"
              className="block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
            >
              {slaString}
            </a>
            <Ratings ratings={avgRating} key={`${name}${costForTwo}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaturantCard;
