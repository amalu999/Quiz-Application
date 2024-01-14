import React, { useEffect, useRef, useState } from "react";
import questions from "../questions";
import "../Quiz.css";
import Displaymarks from "./Displaymarks";
import { useNavigate } from "react-router-dom";
var streak = 0;
const Quiz = () => {
  const [questionindex, setQuestionIndex] = useState(0);
  const myRefs = useRef([]);
  const indexarr = [0, 1, 2, 3];
  const [answer, setAnswer] = useState();

  console.log("outside streak", streak);

  function clickedanswer(e, questionindex, index) {
    if (questions[questionindex].correct === e.target.value) {
      e.target.classList.add("active");
      // {console.log("myref",myRefs.current[index]);}
      //make other buttons hidden
      const filteredindex = indexarr.filter((i) => i != index);
      filteredindex.map((item) => {
        // console.log(myRefs.current[item]);
        myRefs.current[item].classList.add("hiddendisplay");
      });

      streak = streak + 1;
      console.log("inside log", streak);
      // clearTimeout(timeoutid)

      //user enter crct answer call next question
      setTimeout(() => {
        if (questionindex < 3) {
          setQuestionIndex(questionindex + 1);
        } else {
          setAnswer(3);
        }
      }, 10000);
    } else {
      e.target.classList.add("inactive");
      // console.log("correct ans",questions[questionindex].correct);
      // console.log("myRefs.current[eachitem]",myRefs.current[1].value);
      //index where correct button is present
      const crtwrgarray = indexarr.filter(
        (eachitem) =>
          myRefs.current[eachitem].value === questions[questionindex].correct
      );

      const correctans = crtwrgarray[0];
      // console.log("index",index);
      // console.log("correctans",correctans);
      //also push wrong answer
      crtwrgarray.push(index);
      myRefs.current[correctans].classList.add("active");
      const removedArray = indexarr.filter((el) => !crtwrgarray.includes(el));
      //removedarray has values to be hidden
      removedArray.map((item) => {
        myRefs.current[item].classList.add("hiddendisplay");
      });
      // clearTimeout(timeoutid);

      setTimeout(() => {
        //user enter wrong answer show next question
        if (questionindex < 3) {
          setQuestionIndex(questionindex + 1);
        } else {
          setAnswer(3);
        }
      }, 10000);
    }
  }
  function reset() {
    setQuestionIndex(0);

    console.log("after reset", questionindex);
  }
  const lengthOfQuestion = questions.length;
  if (questionindex === answer) {
    return <Displaymarks reset={reset} streak={streak} />;
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
