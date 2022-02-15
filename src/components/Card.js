import React from "react";
import "../scss/Card.scss";

export default class Card extends React.Component {
  componentDidMount() {
    console.log(this.props.data.products);
  }

  state = {
    active: false,
  };

  cardSelect = () => {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  };

  productCard = () =>
    this.props.data.products.map((i) => (
      <section
        key={i.id}
        className={
          this.state.active
            ? "product-card product-card--active"
            : "product-card"
        }
        onClick={() => this.cardSelect()}
      >
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

          <h2 className="product__name">{i.productName}</h2>

          <p className="content__project-text">PROJEKT:</p>
          <h3 className="content__project-name">{i.projectName}</h3>
        </section>
      </section>
    ));

  render() {
    return <>{this.productCard()}</>;
  }
}
