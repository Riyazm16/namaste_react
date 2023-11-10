// const heading = React.createElement("h1",{id:"heading"},"Hello world from react !");
import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("h1", { id: "heading" }, "Namste react 🤖");
console.log(heading);
// babel transpiles it to React.createElement => react elment => html element
// const Title = () => {
//   return (
//     <h1 id="heading" className="heading" tabIndex="1">
//       this is jsx heading
//     </h1>
//   );
// };

// const span = <span>🛩️ span element with icons 🐎</span>;

//component composition

const Title = () => {
  return (
    <h1>
      {/* {span} */}
      Namaste react
      {/* <FirstComponent></FirstComponent> */}
    </h1>
  );
};
const FirstComponent = () => {
  return (
    <div className="container">
      {/* {title} */}
      <Title></Title>
      <Title></Title>
      <Title></Title>
      {Title()}
      <h1>Namste react functional component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render([heading, jsxHeading]);
root.render(<FirstComponent />);
