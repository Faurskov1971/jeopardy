import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import "./components/jordihovedet.css"
import Game from "./components/Game";

ReactDOM.render(
  <div>
    <Game />
    <p className="description">
      Udviklet af Brian Faurskov i React, TypeScript, CSS3, HTML5 med mere.
    </p>
  </div>,
  document.getElementById("root")
);
