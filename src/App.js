import React from "react";
import logo from "./logo.svg";
import "./App.css";
import earth from "./earth.png";

import { addStars } from "./Helper";

const stars = addStars(40);
const App = () => {
  return (
    <div className="App">
      {stars}
      <header className="App-header"></header>
      <div className="world-container">
        <img className="earth" src={earth} />
      </div>
    </div>
  );
};

export default App;
