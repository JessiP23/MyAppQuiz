import React, { useState, useEffect } from "react";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import "./style.css";
import { Link } from "react-router-dom";

function MathApp() {
  //update variables
  //not displaying final answers by default
  const [endQuiz, setEndQuiz] = useState(false);
  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    //ES module
    const script1 = document.createElement('script');
    script1.type = 'module';
    //ionicons ES module
    script1.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js';
    document.head.appendChild(script1);

    //Not ES module
    const script2 = document.createElement('script');
    script2.nomodule = true;
    script2.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js';
    document.head.appendChild(script2);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  //questions, options, answers
  const questions = [
    {
      id: 1,
      choice: "What is the square root of 72?",
      options: [
        { id: 0, choice: "5√2", condition: false },
        { id: 1, choice: "6√2", condition: true },
        { id: 2, choice: "7√2", condition: false },
        { id: 3, choice: "I don't know", condition: false },
      ],
    },
    {
      id: 2,
      choice: (
        <div>
          <p>What is the graph of the following function</p>
          <p>f(x) = sinx</p>
        </div>
      ),
      options: [
        { id: 4, img: img1, condition: true },
        { id: 5, img: img2, condition: false },
        { id: 6, img: img3, condition: false },
        { id: 7, img: img4, condition: false },
      ],
    },
    {
      id: 3,
      choice: (
        <div>
          <p>Determine the answer of the following operation</p>
          <p>(12² − 6²) ÷ (13² − 5²) </p>
        </div>
      ),
      options: [
        { id: 8, choice: "13", condition: false },
        { id: 9, choice: "30", condition: false },
        { id: 10, choice: "3/4", condition: true },
        { id: 11, choice: "7", condition: false },
      ],
    },
    {
      id: 4,
      choice: "What are the first three common multiples of 15 and 20.",
      options: [
        { id: 12, choice: "30, 60, 90", condition: false },
        { id: 13, choice: "15, 30, 45", condition: false },
        { id: 14, choice: "20, 40, 60", condition: false },
        { id: 15, choice: "60, 120, 180", condition: true },
      ],
    },
    {
      id: 5,
      choice: "Convert 87 to binary representation: ",
      options: [
        { id: 16, choice: "1010111", condition: false },
        { id: 17, choice: "1011101", condition: true },
        { id: 18, choice: "10110100", condition: true },
        { id: 19, choice: "1101100", condition: false },
      ],
    },
    {
      id: 6,
      choice: "Find the value of y = 12x - 15 given x = 3",
      options: [
        { id: 20, choice: "19", condition: false },
        { id: 21, choice: "21", condition: true },
        { id: 22, choice: "18", condition: false },
        { id: 23, choice: "20", condition: false },
      ],
    },
    {
      id: 7,
      choice: "Find the x- intercept of y = 2x + 8",
      options: [
        { id: 24, choice: "-4", condition: true },
        { id: 25, choice: "8", condition: false },
        { id: 26, choice: "4", condition: false },
        { id: 27, choice: "I don't know", condition: false },
      ],
    },
    {
      id: 8,
      choice: (
        <div>
          <p>What is the slope of the following graph?</p>
          <img src={img5} alt="Function" />
        </div>
      ),
      options: [
        { id: 28, choice: "No Solution", condition: false },
        { id: 29, choice: "m = 8", condition: false },
        { id: 30, choice: "m = 1/4", condition: false },
        { id: 31, choice: "m = 4", condition: true },
      ],
    },
    {
      id: 9,
      choice: "Solve for x:  1/5x + 1/3 = 1/2",
      options: [
        { id: 32, choice: "1/6", condition: false },
        { id: 33, choice: "5/6", condition: true },
        { id: 34, choice: "1/2", condition: false },
        { id: 35, choice: "4/3", condition: false },
      ],
    },
    {
      id: 10,
      choice: "Determine if the following numbers are either prime or composite:  13, 18, 23, 33, 63",
      options: [
        { id: 36, choice: "Prime, Composite, Prime, Composite, Prime", condition: false },
        { id: 37, choice: "Prime, Composite, Composite, Prime, Prime", condition: false },
        { id: 38, choice: "Prime, Composite, Prime, Composite, Composite", condition: true },
        { id: 39, choice: "Composite, Prime, Composite, Prime, Prime", condition: false },
      ],
    },
  ];

  //restart game with initial values
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setEndQuiz(false);
  };


  const optionSelected = (clickedOptionId) => {
    if (endQuiz){
      return;
    }

    //finds id in selected option
    const selectedOption = questions[currentQuestion].options.find(option => option.id === clickedOptionId);
    //update score if correct answers
    if (selectedOption && selectedOption.condition) {
      setScore(score + 1);
    }
    //keep track of the currently option
    setSelectedOptionId(clickedOptionId);
  };
  


  const nextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      //resets the option into new currentQuestion
      setSelectedOptionId(null);
    } else {
      setEndQuiz(true);
    }
  }


  return (
    <div className="quiz">
      {/*if all questions have been answered */}
        {endQuiz ? (
        <div className="final-page">
          <header>Final Results</header>
          {/*table with scores */}
          <div className="content-result">
            <div className="final-results">
              <table>
                <tr>
                  <th>No. Questions</th>
                  <th>Correct Answers</th>
                  <th>Wrong Answers</th>
                  <th>Score</th>
                </tr>
                <tr>
                  <td>{questions.length}</td>
                  <td>{score}</td>
                  <td>{questions.length - score}</td>
                  <td>{(score / questions.length) * 100}%</td>
                </tr>
              </table>
            </div>
            {/*Restart Game */}
            <button onClick={restartGame}>Restart Quiz</button>
            <Link className="style-link" to="/quiz-section">Go to Home Page</Link>
            </div>
            {/*Footer */}
          <div className="footer">
            <footer>
              <div className="author">
                <h6>Author: Jessi Pavia Martinez</h6>
                <a href="mailto:jessi316866@gmail.com">jessi316866@gmail.com</a>
              </div>
              <div className="icons">
                <h6>Social Media: </h6>
                <a href="https://www.facebook.com/jessi.pavia.5" target="blank"><ion-icon name="logo-facebook"></ion-icon></a>
                <a href="https://www.linkedin.com/in/jessi-p-853299200/" target="blank"><ion-icon name="logo-linkedin"></ion-icon></a>
                <a href="https://github.com/JessiP23" target="blank"><ion-icon name="logo-github"></ion-icon></a>
                <a href="https://discord.com/users/749068430765850676" target="blank"><ion-icon name="logo-discord"></ion-icon></a>
              </div>
            </footer>
          </div>
        </div>
      ) : (
        <div className="front-quiz">
          {/*Rendering questions */}
          <header>Math Quiz</header>
          <div className="questions">
            <h3 className="question-choice">{questions[currentQuestion].choice}</h3>
            <div className="choice-list">
              <ul>
                {questions[currentQuestion].options.map((option) => {
                  return (
                    <li className={option.id === selectedOptionId ? 'selected' : ''} key={option.id} onClick={() => optionSelected(option.id)}>
                      {option.img ? (
                        <img src={option.img} alt={`Option ${option.id}`} className="image-questions" />
                      ): (
                        option.choice
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
            <button onClick={nextQuestion}>Next Question</button>
            <h4>{currentQuestion + 1} / {questions.length}</h4>
            <h6>Empty Question = Wrong Answer</h6>
          </div>
        </div>
      )
    }
      
    </div>
  );
}

export default MathApp;