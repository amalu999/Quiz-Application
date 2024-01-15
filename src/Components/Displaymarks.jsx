import React from "react";

const Displaymarks = ({reset, streak }) => {
  return (
    <div className="displaymarks">
      <h1>End Quiz!!!!!</h1>
      <div className="maindisplay">
        <h2>Summary</h2>
        <div className="scoreclass">
          <h3>Score {streak}</h3>
        </div>
        {/* <button onClick={reset}>Play Again</button> */}
      </div>
    </div>
  );
};

export default Displaymarks;
