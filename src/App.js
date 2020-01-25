import React from "react";
import logo from "./logo.svg";
import "./App.css";
import earth from "./earth.png";
import { WorldContainer } from "./StyledComponents";

import { addStars } from "./Helper";

const stars = addStars(40);
const App = () => {
  return (
    <div>
      {stars}
      <div className="App">
        <div className="message">
          I would follow you around the (flat) world
        </div>
        <WorldContainer>
          <div className="us">
            <div className="rainbow" />
            <div className="robin" />
          </div>
          <div className="earth" />
        </WorldContainer>
      </div>
    </div>
  );
};

export default App;
