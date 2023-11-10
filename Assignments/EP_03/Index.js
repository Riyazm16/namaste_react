import React from "react";
import ReactDOM from "react-dom/client";

const nestedHeader = React.createElement("div", {}, [
  React.createElement(
    "h1",
    { className: "title" },
    "this is heading 1 with react create element"
  ),
  React.createElement(
    "h2",
    { className: "title" },
    "this is heading 2 with react create element"
  ),
  React.createElement(
    "h3",
    { className: "title" },
    "this is heading 3 with react create element"
  ),
]);

//jsx element
const jsxElem = (
  <div>
    <h1 className="title">this is heading 1 with jsx Element</h1>
    <h2 className="title">this is heading 2 with jsx Element</h2>
    <h3 className="title">this is heading 1 with jsx Element</h3>
  </div>
);

const Heading = () => {
  return <h1>List of Heading with functional component</h1>;
};

const Navbar = () => {
  return (
    <nav>
      <img src="https://namastedev.com/namaste-react/assets/img/small-logo.png" />
      <input type="text" placeholder="Search.." />
      <button>🔍</button>
      <span>🤵‍♂️</span>
    </nav>
  );
};

//functional component

const ListOfHeading = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Heading></Heading>
      <h2>this is heading 1</h2>
      <h3>this is heading 2</h3>
      <h4>this is heading 1</h4>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render([Heading, nestedHeader, jsxElem, <ListOfHeading></ListOfHeading>]);
root.render(<ListOfHeading></ListOfHeading>);
