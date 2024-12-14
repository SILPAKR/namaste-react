import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading1" }, "Heading1"),
    React.createElement("h2", { id: "heading2" }, "Heading2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading1" }, "Heading1"),
    React.createElement("h2", { id: "heading2" }, "Heading2"),
  ]),
]);
//heading is a js object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
