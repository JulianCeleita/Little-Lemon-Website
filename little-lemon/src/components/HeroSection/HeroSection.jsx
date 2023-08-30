import React from "react";
import "./HeroSection.css";

export const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="left-column">
          <h1 className="title">Little Lemon</h1>
          <h2 className="subtitle">Chicago</h2>
          <p className="description">
            Welcome to Little Lemon! A cozy spot to relish delightful dishes in
            Chicago. We invite you to reserve your table and savor our array of
            unique flavors that capture the essence of our culinary expertise.
            Whether you're seeking a quiet dinner or a lively gathering, our
            restaurant offers an exceptional dining experience that will leave
            you craving for more.
          </p>
          <button className="reserve-button">Reserve a table</button>
        </div>
        <div className="right-column">
          <img
            src="/littlelemonsite.jpg"
            alt="Little Lemon Restaurant"
            className="hero-image"
          />
        </div>
      </div>
    </div>
  );
};
