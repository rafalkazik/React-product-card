import React from "react";
import classNames from "classnames";
import "../scss/components/Card.scss";

export default class Card extends React.Component {
  state = {
    isActive: false,
  };

  selectCard = () => {
    const isEnable = this.props.isEnable;
    const isError = this.props.isError;
    if (isEnable && !isError) {
      this.selectNormalCard();
    }
    if (isEnable && isError) {
      this.selectErrorCard();
    }
  };

  selectNormalCard = () => {
    const activeAndNoError =
      this.state.isActive === false && this.props.isError === false;

    if (activeAndNoError) {
      this.setState((state) => {
        return (state.isActive = !state.isActive);
      });
    } else {
      this.setState((state) => {
        return (state.isActive = !state.isActive);
      });
    }
  };

  selectErrorCard = () => {
    const activeAndError =
      this.state.isActive === false && this.props.isError === true;

    if (activeAndError) {
      this.setState((state) => {
        return (state.isActive = !state.isActive);
      });
    } else {
      this.setState((state) => {
        return (state.isActive = !state.isActive);
      });
    }
  };

  productCard = () => {
    const isActive = this.state.isActive;
    const isEnable = this.props.isEnable;
    const isError = this.props.isError;

    return (
      <section
        key={this.props.id}
        className={classNames(
          "card-list__product-card product-card",
          {
            "product-card product-card--active":
              isActive && isEnable && !isError,
          },
          {
            "product-card product-card--disabled": !isEnable,
          },
          {
            "product-card product-card--active-error":
              isActive && isEnable && isError,
          }
        )}
        onClick={() => this.selectCard()}
      >
        <picture className="product-card__picture picture">
          <source
            media="(min-width: 1200px)"
            srcSet={`${this.props.productImageDesktop}`}
          />
          <img
            src={this.props.productImageMobile}
            className="picture__product-image"
            alt="product photo"
          />
        </picture>
        <section className="product-card__content content">
          <div
            className={classNames("content__tag tag", {
              "content__tag--error": isError,
            })}
          >
            <p className="tag__text">{this.props.tagText}</p>
          </div>
          <h2 className="product__name">{this.props.productName}</h2>
          <p className="content__project-text">PROJEKT:</p>
          <h3 className="content__project-name">{this.props.projectName}</h3>
        </section>
      </section>
    );
  };

  render() {
    return <React.Fragment>{this.productCard()}</React.Fragment>;
  }
}
