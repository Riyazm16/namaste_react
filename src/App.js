// const heading = React.createElement("h1",{id:"heading"},"Hello world from react !");
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      
      <Body></Body>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render([heading, jsxHeading]);
root.render(<AppLayout />);

/**
 * header
 * - logo
 * - Nav menu
 * body
 * - Search
 * - Restaurnat container
 *    - restarurant card
 * footer
 * - copyright
 * - links
 * - address
 * - contact
 */
