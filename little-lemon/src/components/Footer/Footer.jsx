import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <section className="footer">
      <div className="column logo-footer">
        <a href="#">
          <img src="/logo.png" alt="Little Lemon Logo" />
        </a>
      </div>
      <div className="column">
        <h3>Doormat Navigation</h3>
        <ul className="footer-links">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="/reservations">Reservations</a>
          </li>
          <li>
            <a href="/order">Order Online</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </div>
      <div className="column">
        <h3>Contact</h3>
        <ul className="footer-links">
          <li>
            <a href="/adress">Adress</a>
          </li>
          <li>
            <a href="/phone">Phone Number</a>
          </li>
          <li>
            <a href="/email">Email</a>
          </li>
        </ul>
      </div>
      <div className="column">
        <h3>Social Media Link</h3>
        <ul className="footer-links">
          <li>
            <a href="/adress">Adress</a>
          </li>
          <li>
            <a href="/phone">Phone Number</a>
          </li>
          <li>
            <a href="/email">Email</a>
          </li>
        </ul>
      </div>
    </section>
  );
};
