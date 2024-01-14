import React from "react";

const Displaymarks = ({ streak }) => {
  return (
    <div className="displaymarks">
      <h1>End Quiz!!!!!</h1>
      <div className="maindisplay">
        <h2>Summary</h2>
        <div className="scoreclass">
          <h3>Score {streak}</h3>
        </div>
      </div>
    </div>
  );
};

export default Displaymarks;
