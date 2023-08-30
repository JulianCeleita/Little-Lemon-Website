import React from "react";
import "./specials.css";

export const Specials = () => {
  return (
    <div className="specials-container">
      <div className="specials-header">
        <h2 className="specials-subtitle">Specials</h2>
        <button className="menu-button">On the menu</button>
      </div>
      <div className="specials-content">
        <div className="special">
          <img
            src="/greeksalad.jpg"
            alt="Greek Salad"
            className="special-image"
          />
          <h3 className="special-title">Greek Salad</h3>
          <p className="special-price">$9.99</p>
          <p className="special-description">
            A refreshing mix of fresh veggies, olives, and feta cheese, drizzled
            with olive oil and balsamic vinaigrette.
          </p>
          <button className="order-button">Order a delivery</button>
        </div>
        <div className="special">
          <img
            src="/ratatouille.jpg"
            alt="Ratatouille"
            className="special-image"
          />
          <h3 className="special-title">Ratatouille</h3>
          <p className="special-price">$12.99</p>
          <p className="special-description">
            A savory blend of assorted vegetables and herbs, slow-cooked to
            perfection and served with a side of crusty bread.
          </p>
          <button className="order-button">Order a delivery</button>
        </div>
        <div className="special">
          <img
            src="/panecook.jpg"
            alt="Stroganoff Panecook"
            className="special-image"
          />
          <h3 className="special-title">Stroganoff Panecook</h3>
          <p className="special-price">$14.99</p>
          <p className="special-description">
            Tender pan-fried pancakes topped with a creamy mushroom and beef
            stroganoff sauce, a delightful twist on a classic.
          </p>
          <button className="order-button">Order a delivery</button>
        </div>
      </div>
    </div>
  );
};
