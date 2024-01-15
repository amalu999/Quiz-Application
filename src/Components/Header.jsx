import React, { useEffect, useState } from "react";
import Quiz from "./Quiz";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  const [showGo, setShowGo] = useState(false);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (count > 1) {
        setCount((prevCount) => prevCount - 1);
      } else {
        clearInterval(countdownInterval);
        setShowGo(true);
        setTimeout(() => {
          navigate("/quiz");
        }, 2000);
      }
    }, 2000);
    return () => clearInterval(countdownInterval);
  }, [count]);

  return (
    <div>
      <div>
        
        <div className="container">
          <div className="goscreen">
            {showGo ? <h1>GO!</h1> : <h1>{count}</h1>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
