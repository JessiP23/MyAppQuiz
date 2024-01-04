import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./quizzes.css";
import mathImage from "./images/mathImage.jpg";
import spanishImage from "./images/spanish.jpg";
import ChangeTextColor from "./changeColor";

const QuizPage = () => {
  const [displayQuizzes, setDisplayQuizzes] = useState(false);

  const switchQuizzes = () => {
    //toggle quizzes, if currently true, sets it to false
    setDisplayQuizzes(!displayQuizzes);
  };

  if(displayQuizzes){
    document.body.style.overflow = "visible";
  } else{
    document.body.style.overflow = "hidden";
  }

  return (
    <div className="page">
        <h1 className="header">
            {/*change text color infinitely */}
            < ChangeTextColor text="Quiz Section" />
        </h1>
            <div className="menu-button" onClick={switchQuizzes}>
                <i>Display Quiz themes</i>
            </div>
            {displayQuizzes && (
                <ul className="quiz-list">
                    <li>
                        <Link to="/quiz-section/math-quiz" target="_blank">
                            <img src={mathImage} alt="Pi Meme" width='300' />
                            <br />
                            Math Quiz
                        </Link>
                    </li>
                    <li>
                        <Link to="/quiz-section/spanish-app" target="_blank">
                            <img src={spanishImage} alt="Spanish Language Representation" width='300' />
                            <br />
                            Spanish Quiz   
                        </Link>
                    </li>
                </ul>
      )}
    </div>
  );
}

export default QuizPage;
