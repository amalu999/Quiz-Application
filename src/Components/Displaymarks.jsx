import React from "react";

const Displaymarks = ({ reset, streak, wrong }) => {
  let score = streak * 50;
  return (
    <div className="displaymarks">
      <h1>End Quiz!!!!!</h1>
      <div className="maindisplay">
        <h2>Summary</h2>
        <div className="scoreclass">
          <h3>Score : {score}</h3>
          <h3>
            Correct Answer : {streak} Wrong Answer : {wrong}
          </h3>
        </div>
        <button className="playbutton" onClick={reset}>
          <span>Click here to</span> Play Again
        </button>
      </div>
    </div>
  );
};

export default Displaymarks;
