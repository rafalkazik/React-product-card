import React from "react";
import ReactDOM from "react-dom";
import Card from "./components/Card";
import "./scss/app.scss";
import data from "./data/db.json";

ReactDOM.render(<Card data={data} />, document.querySelector("#root"));
