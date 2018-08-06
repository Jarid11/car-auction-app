import React from "react";
import "./Header.css";

import Login from "../Login/Login";

export default function Header() {
  return (
    <header className="header-container">
      <h2>Car Auction Demo</h2>
      <Login />
    </header>
  );
}
