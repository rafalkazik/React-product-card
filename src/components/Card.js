import React from "react";

export default class App extends React.Component {
  render() {
    return (
      <section className="product-card">
        <picture className="product-card__picture picture">
          <img
            src="./images/mobilePhoto.png"
            className="picture__product-image"
            alt="product photo"
          ></img>
        </picture>
        <section className="product-card__content content">
          <div className="content__tag tag">
            <p className="tag__text">TAG TEXT</p>
          </div>
          <h2 className="content__product-name">0012-DE-Muller</h2>
          <p className="content__project-text">PROJEKT:</p>
          <h3 className="content__project-name">Point 145</h3>
        </section>
      </section>
    );
  }
}
