import React, { useEffect, useRef, useState } from "react";
import questions from "../questions";
import "../Quiz.css";
import Displaymarks from "./Displaymarks";
import { useNavigate } from "react-router-dom";
var streak = 0;
var userclicked = false;
var automaticclick = false;
const Quiz = () => {
  const [questionindex, setQuestionIndex] = useState(0);

  const myRefs = useRef([]);
  const indexarr = [0, 1, 2, 3];
  const [answer, setAnswer] = useState();

  function myindex() {
    if (!automaticclick) {
      const ans = questions[questionindex].answers;
      const crct = questions[questionindex].correct;
      const ansindex = ans.findIndex((item) => item === crct);
      automaticanswer(myRefs.current[ansindex], ansindex);
      automaticclick = false;
    }
  }

  //if user didn't input a value show answer after

  const timeoutid = setTimeout(myindex, 5000);

  function automaticanswer(crctindex, ansindex) {
    if (crctindex) {
      crctindex?.classList.add("active");
      const filteredindex = indexarr.filter((i) => i != ansindex);
      filteredindex.map((item) => {
        myRefs.current[item].classList.add("hiddendisplay");
      });

      setTimeout(() => {
        if (questionindex < 3) {
          setQuestionIndex(questionindex + 1);
        } else {
          setAnswer(3);
        }
      }, 10000);
    }
  }

  function clickedanswer(e, questionindex, index) {
    userclicked = true;
    if (questions[questionindex].correct === e.target.value) {
      e.target.classList.add("active");
      const filteredindex = indexarr.filter((i) => i != index);
      filteredindex.map((item) => {
        myRefs.current[item].classList.add("hiddendisplay");
      });
      streak = streak + 1;
      setTimeout(() => {
        if (questionindex < 3) {
          setQuestionIndex(questionindex + 1);
        } else {
          setAnswer(3);
        }
      }, 10000);
    } else {
      e.target.classList.add("inactive");
      const crtwrgarray = indexarr.filter(
        (eachitem) =>
          myRefs.current[eachitem].value === questions[questionindex].correct
      );
      const correctans = crtwrgarray[0];
      crtwrgarray.push(index);
      myRefs.current[correctans].classList.add("active");
      const removedArray = indexarr.filter((el) => !crtwrgarray.includes(el));
      removedArray.map((item) => {
        myRefs.current[item].classList.add("hiddendisplay");
      });
      clearTimeout(timeoutid);
      setTimeout(() => {
        // clearTimeout(timeoutid)
        if (questionindex < 3) {
          setQuestionIndex(questionindex + 1);
        } else {
          setAnswer(3);
        }
      }, 10000);
    }
  }

  const lengthOfQuestion = questions.length;
  if (questionindex === answer) {
    return <Displaymarks streak={streak} />;
  }

  return (
    <div>
      <h1 className="question">{questions[questionindex].text}</h1>
      <ul className="displaybutton">
        {questions[questionindex].answers.map((answer, index) => {
          return (
            <li key={answer}>
              <button
                ref={(el) => (myRefs.current[index] = el)}
                value={answer}
                onClick={(e) => {
                  clickedanswer(e, questionindex, index);
                }}
              >
                {answer}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Quiz;
