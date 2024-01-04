import React, { useState, useEffect } from "react";
import img6 from "../images/img6.jpg";
import img7 from "../images/img7.jpg";
import img8 from "./images/img8.jpg";
import imageToy from "./images/toy.jpg";
import crying from "./images/crying.jpg";
import running from "./images/running.jpg";
import winter from "../images/winter.jpg";
import { Link } from "react-router-dom";
import "./style.css";

function SpanishApp() {
  //update variables
  //not displaying final answers by default
  const [endQuiz, setEndQuiz] = useState(false);
  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  //set social media ionicons
  useEffect(() => {
    const script1 = document.createElement('script');
    //ECMAScript module
    script1.type = 'module';
    script1.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js';
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.nomodule = true;
    script2.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js';
    document.head.appendChild(script2);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  const questions = [
    {
      id: 1,
      choice: (
        <div>
          <p>El perro _____ mientras corría por el parque.</p>
          <img src={img6} alt="Dog" />
        </div> 
      ),
      options: [ 
        { id: 0, choice: "mordió", condition: true },
        { id: 1, choice: "muerde", condition: false },
        { id: 2, choice: "mordieron", condition: false },
        { id: 3, choice: "saluda", condition: false },
      ],
    },
    {
      id: 2,
      choice: (
        <div>
          <p>Mi hermana _____ 40 horas la semana pasada.</p>
          <img src={img7} alt="Kitchen's worker" />
        </div>
      ),
      options: [
        { id: 4, choice:"trabajó", condition: true },
        { id: 5, choice:"trabaja", condition: false },
        { id: 6, choice:"juega", condition: false },
        { id: 7, choice:"encontró", condition: false },
      ],
    },
    {
      id: 3,
      choice: (
        <div>
          <p>¿Cuál de las siguientes imagenes representa Tomás jugando con su pelota?</p>
        </div>
      ),
      options: [
        { id: 8, img: running, condition: false },
        { id: 9, img: imageToy, condition: false },
        { id: 10, img: img8, condition: true },
        { id: 11, img: crying, condition: false },
      ],
    },
    {
      id: 4,
      choice: (
        <div>
          <p>¿Cuál de las siguientes opciones contiene solo verbos en tiempo pasado?</p>
          </div>),
      options: [
        { id: 12, choice: "aprendimos, leemos, jugamos, reimos", condition: false },
        { id: 13, choice: "peleó, tiró, congeló, cocina", condition: false },
        { id: 14, choice: "trabajé, limpié, reprobé, vi", condition: true },
        { id: 15, choice: "pierden, pelean, comen, cenan", condition: false },
      ],
    },
    {
      id: 5,
      choice: (
        <div>
          <p>México    <strong>es / juega</strong>    un país maravilloso al    <strong>parecer / igual</strong>    que Estados Unidos.</p>
          </div>),
      options: [
        { id: 16, choice: "juega, parecer", condition: false },
        { id: 17, choice: "juega, igual", condition: true },
        { id: 18, choice: "es, parecer", condition: true },
        { id: 19, choice: "es, igual", condition: false },
      ],
    },
    {
      id: 6,
      choice: (
      <div>
        <p> En Estados Unidos, la temperatura llega a -4°C cuando es <strong>primavera / invierno</strong></p>
        <img src={winter} alt="Winter Environment" />
        </div>),
      options: [
        { id: 20, choice: "primavera", condition: false },
        { id: 21, choice: "invierno", condition: true },
        { id: 22, choice: "What is primavera?", condition: false },
        { id: 23, choice: "None is the correct solution", condition: false },
      ],
    },
    {
      id: 7,
      choice: (
        <div>
          <p>Durante mi viaje a Virginia, <strong>canté / conocí</strong> mucha gente e hice muchos <strong>animales / amigos</strong></p>
          </div>),
      options: [
        { id: 24, choice: "canté, amigos", condition: false },
        { id: 25, choice: "conocí, animales", condition: false },
        { id: 26, choice: "conocí, amigos", condition: true },
        { id: 27, choice: "canté, animales", condition: false },
      ],
    },
    {
      id: 8,
      choice: (
        <div>
          <p>¿Cuál de las siguientes opciones tiene solo tipos de transporte?</p>
        </div>
      ),
      options: [
        { id: 28, choice: "camisa, suéter, pantalón, chamarra, zapatos", condition: false },
        { id: 29, choice: "uno, dos, tres, cuatro, cinco", condition: false },
        { id: 30, choice: "amarillo, rojo, verde, azul, blanco", condition: false },
        { id: 31, choice: "tren, carro, motocicleta, mototaxi, avión", condition: true },
      ],
    },
    {
      id: 9,
      choice: (
        <div>
          <p>Escoge los siguientes números escritos correctamente</p>
          <ul>
            <li>35</li>
            <li>215</li>
            <li>2450</li>
          </ul>
        </div>
      ),
      options: [
        { id: 32, choice: "treinta cinco, doscientos y quince, doscientos cuarenta y cinco", condition: false },
        { id: 33, choice: "treinta y cinco, doscientos quince, dos mil cuatrocientos cincuenta", condition: true },
        { id: 34, choice: "treinta y cinco, docientos quinse, dos mil cuatrosientos sincuenta", condition: false },
        { id: 35, choice: "treinta sinco, doscientos quince, dos mil cuatrocientos quince", condition: false },
      ],
    },
    {
      id: 10,
      choice: (
        <div>
          <p>Por la mañana, el granjero cosecha manzanas, su hija Lucy le trae regularmente una taza de café caliente para que su papá este pilas. </p>
          <>¿Qué hora mejor representa Lucy llevandole café a su papá?</>
        </div>
      ),
      options: [
        { id: 36, choice: "1:00 pm", condition: false },
        { id: 37, choice: "6:00 pm", condition: false },
        { id: 38, choice: "8:00 am", condition: true },
        { id: 39, choice: "2:00 am", condition: false },
      ],
    },
  ];

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setEndQuiz(false);
  };


  const optionSelected = (clickedOptionId) => {
    if (endQuiz){
      return;
    }

    const selectedOption = questions[currentQuestion].options.find(option => option.id === clickedOptionId);

    if (selectedOption && selectedOption.condition) {
      setScore(score + 1);
    }

    setSelectedOptionId(clickedOptionId);
  };
  


  const nextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOptionId(null);
    } else {
      setEndQuiz(true);
    }
  }


  return (
    <div className="quiz">
        {endQuiz ? (
        <div className="final-page">
          <header>Final Results</header>
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
            <div className="buttonn">
              <button onClick={() => restartGame()}>Restart Quiz</button>
              <Link className="style-link" to="/quiz-section">Go to Home Page</Link>
            </div>
          </div>
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

export default SpanishApp;