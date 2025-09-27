/* 
  File Name: Projects.jsx
  Student Name: Avinnash Suthaharan
  Student ID: 301488418
  Date: 2025-09-25
*/

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';

/* ============================================================
   Function: Projects
   Description:
   Renders the projects section with a typewriter heading, 
   animated intro text, and a responsive grid of portfolio 
   items. Uses Framer Motion for smooth animations.
   ============================================================ */
function Projects() {
  /* ------------------------------
     State: titleTyped
     Purpose: Tracks when the 
     typewriter animation has 
     completed
     ------------------------------ */
  const [titleTyped, setTitleTyped] = useState(false);

  /* ------------------------------
     Effect: Typing Delay
     Purpose: Sets a delay before 
     showing the intro text and grid 
     after heading animation
     ------------------------------ */
  useEffect(() => {
    const timeout = setTimeout(() => setTitleTyped(true), 1800);
    return () => clearTimeout(timeout);
  }, []);

  /* ------------------------------
     Return: JSX
     Purpose: Displays animated 
     heading, intro text, and grid of 
     portfolio items
     ------------------------------ */
  return (
    <div className="flex flex-col items-center px-6 py-20">
      
      {/* Heading with Typewriter */}
      <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 
      text-center">
        <Typewriter
          words={["My Projects..."]}
          loop={1}
          cursor
          cursorStyle="_"
          typeSpeed={100}
          deleteSpeed={0}
          delaySpeed={500}
          onLoopDone={() => setTitleTyped(true)}
        />
      </h2>

      {/* Intro Paragraph */}
      {titleTyped && (
        <motion.p
          className="text-base md:text-lg max-w-2xl mb-12 leading-relaxed 
          text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Here are some of the things I’ve been working on.
        </motion.p>
      )}

      {/* Projects Grid */}
      {titleTyped && (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ staggerChildren: 0.2, duration: 0.8 }}
        >
          {portfolio.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6, type: 
                "spring", stiffness: 120 }}
            >
              <PortfolioItem
                imgUrl={project.imgUrl}
                title={project.title}
                stack={project.stack}
                link={project.link}
              />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}

export default Projects;

