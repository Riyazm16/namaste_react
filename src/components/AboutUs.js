import User from "./User";
import UserClass from "./UserClass";

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>This is about us page</h1>
      <h4>Order your food online</h4>
      <User location={"pune"}></User>
      <hr></hr>
      <UserClass name={"Riyaj"}></UserClass>
    </div>
  );
};

export default AboutUs;
