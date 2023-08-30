import React from "react";
import "./about.css";

export const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-left">
          <h2 className="about-title">Little Lemon</h2>
          <h3 className="about-subtitle">Chicago</h3>
          <p className="about-description">
            Welcome to Little Lemon, where culinary excellence meets a warm and
            inviting atmosphere. Our dedication to serving you the finest dishes
            is unparalleled. From the freshest ingredients to a diverse menu
            inspired by Italian traditions, we ensure every dining experience is
            unforgettable. Savor the taste of passion in every bite as we craft
            culinary artistry in the heart of Chicago.
          </p>
        </div>
        <div className="about-right">
          <div className="restaurant-images">
            <img
              src="/restaurant1.jpg"
              alt="Little Lemon 1"
              className="restaurant-image"
            />
            <img
              src="/restaurant2.jpg"
              alt="Little Lemon 2"
              className="restaurant-image"
            />
            <img
              src="/restaurant3.jpg"
              alt="Little Lemon 3"
              className="restaurant-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
