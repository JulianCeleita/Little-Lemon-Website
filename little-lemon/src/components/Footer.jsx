import React from "react";

export const Footer = () => {
  return (
    <footer>
      <div>
        <img src="/logo.png" alt="Little Lemon Logo" />
      </div>
      <div>
        <h4>Doormat Navigation</h4>
        <nav>
          <ul>
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
      </div>
      <div>
        <h4>Contact</h4>
        <nav>
          <ul>
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
        </nav>
      </div>
      <div>
        <h4>Social Media Link</h4>
        <nav>
          <ul>
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
        </nav>
      </div>
    </footer>
  );
};
