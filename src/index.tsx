import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Game from "./components/Game";

ReactDOM.render(
  <div>
    <h1 className="">BRIANS TIVOLI-QUIZ</h1>
    <Game />
    <p className="description">
      Udviklet af Brian Faurskov i React, TypeScript, CSS3, HTML5 med mere.
    </p>
  </div>,
  document.getElementById("root")
);
