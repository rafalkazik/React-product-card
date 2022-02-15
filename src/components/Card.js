import React from "react";

export default class Card extends React.Component {
  componentDidMount() {
    console.log(this.props.data.products);
  }

  productCard = () =>
    this.props.data.products.map((i) => (
      <section className="product-card">
        <picture className="product-card__picture picture">
          <img
            src={i.productImage}
            className="picture__product-image"
            alt="product photo"
          ></img>
        </picture>
        <section className="product-card__content content">
          <div className="content__tag tag">
            <p className="tag__text">{i.tagText}</p>
          </div>
          <h2 className="content__product-name">{i.productName}</h2>
          <p className="content__project-text">PROJEKT:</p>
          <h3 className="content__project-name">{i.projectName}</h3>
        </section>
      </section>
    ));

  render() {
    return <>{this.productCard()}</>;
  }
}
