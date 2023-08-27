import React from "react";
import css from "./header.css";

export const Header = () => {
  return (
    <header>
      <nav className="navigation">
        <div className="logo-header">
          <a href="#">
            <img src="/logo.png" alt="Little Lemon Logo" />
          </a>
        </div>
        <ul className="nav-links">
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
      </nav>
    </header>
  );
};
