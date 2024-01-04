import React, {useEffect, useRef, useState} from 'react';
import { motion, useAnimation } from 'framer-motion';
import "./content.css";
import { Link } from 'react-router-dom';

//animation variants for container of text 
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

//text inside container
const item = {
  hidden: { 
    y: 20,//vertical position shifted down
    opacity: 0 //completely transparent
    },
  visible: {
    y: 0,
    opacity: 1
  }
};
const array = ["My", "App"];

const SquareRotating = ({ style, top, left, direction }) => {
  //control animations
  const squareAnimation = useAnimation();
  //reference to square element
  const squareReference = useRef(null);

  
  const [dragSquares, setDragSquares] = useState({
    //window dimensions
    left: 0,
    right: window.innerWidth - 90,
    top: 0,
    bottom: window.innerHeight - 90, 
  });

  const calculateConstraints = () => {
    const { offsetWidth, offsetHeight } = squareReference.current;
    setDragSquares({
      left: 0,
      right: window.innerWidth - offsetWidth,
      top: 0,
      bottom: window.innerHeight - offsetHeight,
    });
  };

  //update window dimensions in window resize
  useEffect(() => {
    //calculate constraints for dragging squares in case of resized window
    const handleResize = () => {
      calculateConstraints();
    };
    //Whenever the window is resized, this function is called
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);//run once when the component is staged

  const duration = 3;
  const distance = 200; 

  const initialX = direction === "right" ? -distance : distance;

  useEffect(() => {
    squareAnimation.start({
      x: [initialX, -initialX],
      //if chosen right direction, square will rotate 90 degrees
      rotate: direction === 'right' ? [0, 90] : [90, 0], 
      backgroundColor: direction === 'right' ? ['gray','brown'] : ['green','light-blue'],
      //square moving backwards in horizontal line
      transition: {
        repeat: Infinity,
        repeatType: 'reverse',
        duration: duration,
        ease: 'linear',
      },
    });
  }, [squareAnimation, initialX, direction]);

  return (
    <motion.div
      className='square-rotating'
      ref={squareReference}
      style={{
        borderRadius: '30px',
        width: '90px',
        height: '90px',
        position: 'relative',
        top,
        left,
      }}
      drag
      dragSquares={dragSquares}
      animate={squareAnimation}
    />
  );
};

function MainPage() {
  return (
    <div className="main-page">
      <div className="column">
        <div className='squares-container'>
          {/*Rotating squares on first column */}
          <SquareRotating style={{ top: '200px', left:'50px', zIndex: 1 }} direction="left" />
          <div className='up-square'>
            <SquareRotating style={{ top: '300px', zIndex: 1 }} direction="right" />
          </div>
          <div className='down-square'>
            <SquareRotating style={{ top: '400px', zIndex: 2 }} direction="left"/>
          </div>
          <SquareRotating style={{ top: '500px', zIndex: 1 }} direction="right" />
          <SquareRotating style={{ top: '600px', zIndex: 2 }} direction="left"/>
        </div>
      </div>
      <div className="column">
        <div className='second-column'>
          {/*Title and info in second column */}
          <motion.ul
            className="container"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {/*Mapping and returning animated text */}
            {array.map((text, index) => (
              <motion.li key={index} className="item" variants={item}>
                {text}
              </motion.li>
            ))} 
          </motion.ul>
          <div className='overview'>
            <p>My App Quiz is an interactive quiz to test your knowledge in various subjects through some exciting quizzes. Whether you are looking to enhance your current knowledge or learn something new, these quizzes provide educational experience. Please come and feel free to take a look to my quizzes and send me an email including suggestions or further features / subjects.</p>
          </div>
          <div className='button'>
            <Link to="/quiz-section">Let's Begin</Link>
          </div>
        </div>
      </div>
      <div className="column">
        <div className='wave-container'>
          <div className='vertical-line'></div>
          <div className='vertical-line'></div>
          <div className='vertical-line'></div>
        </div>
        <div className='future-content'>
          <p>FUTURE CONTENT</p>
          <p> -------------------</p>
        </div>
        <div className='wave-container'>
          <div className='vertical-line'></div>
          <div className='vertical-line'></div>
          <div className='vertical-line'></div>
        </div>
      </div>
    </div>
  );
}
export default MainPage;