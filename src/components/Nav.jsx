import React, { useState } from "react";
import "./nav.scss";
import DateTime from "./DateTime";

const Nav = () => {
  return (
    <nav className="macos-navbar">
      <div className="left-nav">
        <div className="nav-icon apple-logo">
          <img src="./nav-icons/apple-logo.png" alt="apple" />
        </div>
        <div className="nav-item bold">Ritik</div>
        <div className="nav-item">File</div>
        <div className="nav-item">Edit</div>
        <div className="nav-item">View</div>
        <div className="nav-item">Window</div>
        <div className="nav-item">Help</div>
      </div>

      <div className="right-nav">
        <div className="nav-icon">
          <img src="./nav-icons/wifi.png" alt="wifi" />
        </div>

        <div className="nav-item date-time">
          <DateTime />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
