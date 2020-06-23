import React from "react";

const Result = ({score, playAgain}) => (
  <div className="score-board">
    <div className="score"> You scored {score} out of 5!! Ab Chudo </div>
    <button className="playBtn" onClick={playAgain}>
      Firse Kheloge?
    </button>
  </div>
);

export default Result;
