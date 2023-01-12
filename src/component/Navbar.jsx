import React from "react";
import "../assets/Navbar.style.css";
class Navbar extends React.Component {
  state = {};
  render() {
    return (
      <div className="navbar">
        <div className="left-side"></div>
        <div className="right-side">
          <ul>
            <a href="#">
              <li>Home</li>
            </a>
            <a href="">
              <li>Products</li>
            </a>
            <a href="">
              <li>About</li>
            </a>
            <a href="">
              <li>Contact</li>
            </a>
            <a href="">
              <li>Account</li>
            </a>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
