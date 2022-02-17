import React from "react";
import Card from "./Card";
import "../scss/components/CardList.scss";
import { v4 as uuidv4 } from "uuid";

const CardList = (props) => {
  const { items } = props;

  const list = items.map((n) => (
    <Card
      key={uuidv4()}
      id={n.id}
      productImageDesktop={n.productImageDesktop}
      productImageMobile={n.productImageMobile}
      tagText={n.tagText}
      productName={n.productName}
      projectName={n.projectName}
      isEnable={n.isEnable}
      isError={n.isError}
    />
  ));

  return <ul className="card-list">{list}</ul>;
};

export default CardList;
