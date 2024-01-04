import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/content';
import QuizPage from './components/quizzes';
import MathApp from './components/math_quiz';
import SpanishApp from './components/spanishApp';

function App() {
  return (
    <Router>
      <Routes>
        {/*Main page */}
        <Route path="/" exact element={<MainPage />} />
        {/*Quiz Section page */}
        <Route path="/quiz-section" element={<QuizPage />} />
        {/*Quizzes */}
        <Route path="/quiz-section/math-quiz" element={<MathApp />}  />
        <Route path='/quiz-section/spanish-app' element={<SpanishApp />} />
      </Routes>
    </Router>
  );
}

export default App;