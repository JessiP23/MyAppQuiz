import React, { useEffect, useRef, useState } from 'react';
import { motion, useTime, useTransform } from 'framer-motion';

const SquareRotating = ({ style, top, left }) => {
  const time = useTime();
  const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });

  const squareReference = useRef(null);
  const [dragConstraints, setDragConstraints] = useState({
    left: 0,
    right: window.innerWidth - 500,
    top: 0,
    bottom: window.innerHeight - 180,
  });

  const calculateConstraints = () => {
    const { offsetWidth, offsetHeight } = squareReference.current;
    setDragConstraints({
      left: 0,
      right: window.innerWidth - offsetWidth,
      top: 0,
      bottom: window.innerHeight - offsetHeight,
    });
  };

  useEffect(() => {
    const handleResize = () => {
      calculateConstraints();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <motion.div
      className='square-rotating'
      ref={squareReference}
      style={{
        background: 'white',
        borderRadius: '30px',
        width: '90px',
        height: '90px',
        position: 'absolute',
        top,
        left,
        transform: `translate(-50%, -50%) rotate(${rotate}deg)`, // Updated this line
        ...style,
      }}
      drag
      dragConstraints={dragConstraints}
    />
  );
};

export default SquareRotating;
