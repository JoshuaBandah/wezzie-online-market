import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import AnimatedLetter from './AnimatedLetter'; // Adjust the path as needed
function AnimatedWord() {
  const letterVariants = {
    initial: { opacity: 0, y: -20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeInOut',
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.h1 variants={letterVariants} initial="initial" animate="animate"
      style={{
        position:"fixed",
        top:"0px",
        left:"0px",
        width:"300px",
        padding:"20px 10px",
        
        fontSize:"100%"
        }}
    >
      <motion.span
        animate={{ scale: [1, 1.2] }}
        transition={{ type: 'spring', stiffness: 70, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
      >
      </motion.span>
      {Array.from(`Wezzie \u00A0 Makert \u00A0 Online`).map((letter, index) => (
        <AnimatedLetter key={index} letter={letter} />
      ))}
    </motion.h1>
  );
}
``
export default AnimatedWord;
