import React from "react";
import "../scss/components/Card-mobile.scss";
import "../scss/components/Card-tablet.scss";
import "../scss/components/Card-desktop.scss";

export default class Card extends React.Component {
  state = {
    products: this.props.data.products,
  };

  selectNormalCard = (index) => {
    if (
      this.state.products[index].isActive === false &&
      this.state.products[index].isError === false
    ) {
      this.setState((state) => {
        return (state.products[index].isActive = true);
      });
    } else {
      this.setState((state) => {
        return (state.products[index].isActive = false);
      });
    }
  };

  selectErrorCard = (index) => {
    if (
      this.state.products[index].isActive === false &&
      this.state.products[index].isError === true
    ) {
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
          // IF THE BOX IS ACTIVE, ENABLE AND WITHOUT ERROR:
          this.state.products[index].isActive &&
          this.state.products[index].boxEnable &&
          !this.state.products[index].isError
            ? "product-card product-card--active"
            : // IF THE BOX IS DISABLED:
            "product-card" && !this.state.products[index].boxEnable
            ? "product-card product-card--disabled"
            : "product-card" &&
              // IF THE BOX IS ACTIVE, ENABLE AND WITH ERROR:
              (this.state.products[index].isActive &&
              this.state.products[index].boxEnable &&
              this.state.products[index].isError
                ? "product-card product-card--active-error"
                : "product-card")
        }
        onClick={
          (this.state.products[index].boxEnable &&
          !this.state.products[index].isError
            ? () => this.selectNormalCard(index)
            : console.log()) ||
          (this.state.products[index].boxEnable &&
          this.state.products[index].isError
            ? () => this.selectErrorCard(index)
            : console.log())
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
          <div
            className={
              this.state.products[index].isError
                ? "content__tag--error"
                : "content__tag tag"
            }
          >
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
