import React from "react";
import ReactDOM from "react-dom";
import CardList from "./components/CardList";
import data from "./data/db.json";

ReactDOM.render(
  <CardList items={data.products} />,
  document.querySelector("#root")
);
