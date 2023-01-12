import React from "react";
import Navbar from "./Navbar";
import Theme from "./Theme";
import "../assets/App.style.css";

function App() {
  return (
    <div className="App">
      <div className="home-page">
        <Navbar />
        <div className="main">
          <Theme />
        </div>
      </div>
    </div>
  );
}

export default App;
