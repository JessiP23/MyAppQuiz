import * as React from 'react';
import { motion, useTime, useTransform } from 'framer-motion';
import "./App.css";
import { Link } from 'react-router-dom';
//container of text
const container = {
  hidden: { opacity: 1, //fully opaque(visible)
     scale: 0 //no visual size
    },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.7
    }
  }
};

//text as a list
const item = {
  hidden: { y: 20,//vertical position shifted down
     opacity: 0 //completely transparent
    },
  visible: {
    y: 0,
    opacity: 1
  }
};
const array = ["My", "App"];

const SquareRotating = () => {
  const time = useTime();
  const rotate = useTransform(time, [0,4000],[0,360], {clamp: false});
  return (
    <motion.div 
      className='square-rotating'
      style={{
        background: 'white',
        borderRadius: '30px',
        width: '90px',
        height: '90px',
        position: 'fixed',
        left: '200px',
        right: '20px',
        rotate,
      }}
      drag
      dragConstraints={{left: 0, right: window.innerWidth - 90, top: 0, bottom: window.innerHeight - 90}}
    />
  );
};

function MainPage() {
  return (
    <div className="main-page">
      <SquareRotating />
      <div className='title-align'>
        <motion.ul
          className="container"
          variants={container}
          initial="hidden"
          //from hidden state to visible animations
          animate="visible"
        >
        {array.map((text, index) => (
          <motion.li key={index} className="item" variants={item}>
            {text}
          </motion.li>
        ))}
        </motion.ul>
      </div>
      <div className='overview'>
          <p>My App Quiz is an interactive quiz to test your knowledge in various subjects through some exciting quizzes. Whether you are looking to enhance your current knowledge or learn something new, these quizzes provide educational experience. Please come and take a look to my quizzes and send me an email for further features / subjects.</p>
      </div>
      <div className='button'>
        <Link to="/quiz-section">Let's Begin</Link>
      </div>
    </div>
  );
}

export default MainPage;

