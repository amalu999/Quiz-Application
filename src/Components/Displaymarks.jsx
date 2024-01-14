import React from "react";

const Displaymarks = ({ reset, streak }) => {
  return (
    <div className="displaymarks">
      <div className="maindisplay">
        <h1>Summary</h1>
        <div className="scoreclass">
          <h3>Score {streak}</h3>
          <i class="bi bi-award-fill"></i>
        </div>
        <button onClick={reset}>Play Again</button>
        <div>
          <h3>Performance Status</h3>
          <div>
            <img src="" alt="" />
            <h4>correct</h4>
            <img src="" alt="" />
            <h4>incorrect</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Displaymarks;
