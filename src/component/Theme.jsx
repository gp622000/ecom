import React from "react";
import "../assets/Theme.style.css";

class Theme extends React.Component {
  state = {};
  render() {
    return (
      <div className="theme">
        <div className="left-theme">
          <h1>Give Your Workout A New Style!</h1>
          <p>
            Success is not always abut greatness. It's about consistency.
            Consistency hard work gains success. Greatness will come.
          </p>
          <button>Explore Now </button>
        </div>
        <div className="right-theme">
          <img
            src="https://ecommerce-website-1.netlify.app/img/image1.png"
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default Theme;
