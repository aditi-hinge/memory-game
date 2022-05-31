import React from "react";
import "../styles.css";

export default function Nav(props) {
  return (
    <div className="header">
      <div className="left-side-elements">Memory Game!</div>
      <div className="right-side-elements">
        Score: {props.currentScore} | Best Score: {props.highScore}
      </div>
    </div>
  );
}
