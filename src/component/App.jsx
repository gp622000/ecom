import React from "react";
import Navbar from "./Navbar";
import Theme from "./Theme";
import "../assets/App.style.css";
import Product from "./Product";

function App() {
  return (
    <div className="App">
      <div className="home-page">
        <Navbar />
        <div className="main">
          <Theme />
        </div>
      </div>
      <div className="feature-product">
        <h3 id="feature-prod">Featured Product</h3>
        <Product />
      </div>
    </div>
  );
}

export default App;
