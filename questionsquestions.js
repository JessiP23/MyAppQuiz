import React, { useState } from "react";
import "./App.css";

function App() {
  //update variables
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      choice: "What is the square root of 72?",
      options: [
        { id: 0, choice: "5√2", condition: false },
        { id: 1, choice: "6√2", condition: true },
        { id: 2, choice: "7√2", condition: false },
        { id: 3, choice: "I don't know", condition: false },
      ],
    },
    {
      choice: "What graph represents the following function:  f(x) = sinx?",
      options: [
        { id: 0, choice: "image1", condition: true },
        { id: 1, choice: "image2", condition: false },
        { id: 2, choice: "image3", condition: false },
        { id: 3, choice: "image4", condition: false },
      ],
    },
    {
      choice: "What is the answer to the following operation (12² − 6²) ÷ (13² − 5²) ?",
      options: [
        { id: 0, choice: "13", condition: false },
        { id: 1, choice: "30", condition: false },
        { id: 2, choice: "3/4", condition: true },
        { id: 3, choice: "7", condition: false },
      ],
    },
    {
      choice: "What are the first three common multiples of 15 and 20.",
      options: [
        { id: 0, choice: "30, 60, 90", condition: false },
        { id: 1, choice: "15, 30, 45", condition: false },
        { id: 2, choice: "20, 40, 60", condition: false },
        { id: 3, choice: "60, 120, 180", condition: true },
      ],
    },
    {
      choice: "Convert 87 to binary representation",
      options: [
        { id: 0, choice: "1010111", condition: false },
        { id: 1, choice: "1011101", condition: true },
        { id: 2, choice: "10110100", condition: true },
        { id: 3, choice: "1101100", condition: false },
      ],
    },
    {
      choice: "Find the value of y = 12x - 15 given x = 3",
      options: [
        { id: 0, choice: "19", condition: false },
        { id: 1, choice: "21", condition: true },
        { id: 2, choice: "18", condition: false },
        { id: 3, choice: "20", condition: false },
      ],
    },
    {
      choice: "Find the x- intercept of y = 2x + 8",
      options: [
        { id: 0, choice: "-4", condition: true },
        { id: 1, choice: "8", condition: false },
        { id: 2, choice: "4", condition: false },
        { id: 3, choice: "I don't know", condition: false },
      ],
    },
    {
      choice: "What is the slope of the following graph?",
      options: [
        { id: 0, choice: "No Solution", condition: false },
        { id: 1, choice: "m = 8", condition: false },
        { id: 2, choice: "m = 1/4", condition: false },
        { id: 3, choice: "m = 4", condition: true },
      ],
    },
    {
      choice: "Solve for x:  1/5x + 1/3 = 1/2",
      options: [
        { id: 0, choice: "1/6", condition: false },
        { id: 1, choice: "5/6", condition: true },
        { id: 2, choice: "1/2", condition: false },
        { id: 3, choice: "4/3", condition: false },
      ],
    },
    {
      choice: "Determine if the following numbers are either prime or composite:  13, 18, 23, 33, 63",
      options: [
        { id: 0, choice: "Prime, Composite, Prime, Composite, Prime", condition: false },
        { id: 1, choice: "Prime, Composite, Composite, Prime, Prime", condition: false },
        { id: 2, choice: "Prime, Composite, Prime, Composite, Composite", condition: true },
        { id: 3, choice: "Composite, Prime, Composite, Prime, Prime", condition: false },
      ],
    },
  ];


  const optionClicked = (condition) => {
    console.log("Clicked! Condition:", condition)
    // If condition is true
    if (condition) {
      setScore(score + 1);
    }
    // Move to the next question
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      <h1>Math Quiz</h1>

      <h2>Score: {score}</h2>

      {showResults ? (
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        <div className="question-card">
          {questions.map((question, index) => (
            <div key={index}>
              <h2>
                Question: {index + 1} out of {questions.length}
              </h2>
              <h3 className="question-choice">{question.choice}</h3>

              <ul>
                {question.options.map((option) => (
                  <li
                    key={option.id}
                    onClick={() => optionClicked(option.condition)}
                  >
                    {option.choice}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;