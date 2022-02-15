import React from "react";
import "../scss/components/Card-mobile.scss";
import "../scss/components/Card-tablet.scss";
import "../scss/components/Card-desktop.scss";

export default class Card extends React.Component {
  state = {
    products: this.props.data.products,
  };

  componentDidMount() {
    console.log(this.props);
    console.log(this.state);
  }

  cardSelect = (index) => {
    if (this.state.products[index].isActive === false) {
      this.setState((state) => {
        return (state.products[index].isActive = true);
      });
    } else {
      this.setState((state) => {
        return (state.products[index].isActive = false);
      });
    }
  };

  productCard = () =>
    this.state.products.map((i, index) => (
      <section
        key={i.id}
        className={
          this.state.products[index].isActive
            ? "product-card product-card--active"
            : "product-card" && !i.boxEnable
            ? "product-card product-card--disabled"
            : "product-card"
        }
        onClick={
          i.boxEnable ? () => this.cardSelect(index) : console.log("disabled")
        }
      >
        <picture className="product-card__picture picture">
          <source
            media="(min-width: 1200px)"
            srcSet={`${i.productImageDesktop}`}
          />
          <img
            src={i.productImageMobile}
            className="picture__product-image"
            alt="product photo"
          />
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
    return <React.Fragment>{this.productCard()}</React.Fragment>;
  }
}
