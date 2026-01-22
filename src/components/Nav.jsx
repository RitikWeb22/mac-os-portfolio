import React from "react";
import "./nav.scss";
import DateTime from "./DateTime";
const Nav = () => {
  return (
    <nav>
      <div className="left-nav">
        <div className="nav-icon">
          <img src="./nav-icons/apple-logo.png" alt="apple-logo" />
        </div>
        <div className="nav-item">
          <p>Ritik</p>
        </div>
        <div className="nav-item">
          <p>File</p>
        </div>
        <div className="nav-item">
          <p>Window</p>
        </div>
        <div className="nav-item">
          <p>Terminal</p>
        </div>
      </div>
      <div className="right-nav">
        <div className="nav-icon">
          <img src="./nav-icons/wifi.png" alt="" />
        </div>
        <div className="nav-item">
          <DateTime />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
