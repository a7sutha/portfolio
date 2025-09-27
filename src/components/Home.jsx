/* 
  File Name: Home.jsx
  Student Name: Avinnash Suthaharan
  Student ID: 301488418
  Date: 2025-09-25
*/

import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/* ============================================================
   Function: Home
   Description:
   Renders the homepage with an animated greeting, typewriter 
   text for titles, a short introduction paragraph, and 
   navigation boxes linking to other sections.
   ============================================================ */
function Home() {
  /* ------------------------------
     State: hiTyped
     Purpose: Tracks when the initial 
     greeting has finished typing
     ------------------------------ */
  const [hiTyped, setHiTyped] = useState(false);

  /* ------------------------------
     State: showParagraph
     Purpose: Controls when the 
     paragraph and boxes appear
     ------------------------------ */
  const [showParagraph, setShowParagraph] = useState(false);

  /* ------------------------------
     Constants: hiText, firstTitle, titles
     Purpose: Define the text strings 
     used in the typewriter animations
     ------------------------------ */
  const hiText = "Hi! I'm Avi,";
  const firstTitle = "Software Engineer.";
  const titles = ["Software Engineer.", "Web Developer.", "Tech Enthusiast."];

  /* ------------------------------
     Effect: Typing Delay
     Purpose: Manages timing of when 
     greeting, titles, and paragraph 
     appear based on typewriter lengths
     ------------------------------ */
  useEffect(() => {
    const hiDuration = hiText.length * 100 + 500;
    const firstTitleDuration = firstTitle.length * 60 + 1000;

    const timeoutHi = setTimeout(() => setHiTyped(true), hiDuration);
    const timeoutParagraph = setTimeout(
      () => setShowParagraph(true),
      hiDuration + firstTitleDuration
    );

    return () => {
      clearTimeout(timeoutHi);
      clearTimeout(timeoutParagraph);
    };
  }, []);

  /* ------------------------------
     Constant: boxes
     Purpose: Stores navigation links 
     for About, Projects, and Services
     ------------------------------ */
  const boxes = [
    { label: "About Me", link: "/about" },
    { label: "Projects", link: "/projects" },
    { label: "Services", link: "/services" },
  ];

  /* ------------------------------
     Return: JSX
     Purpose: Displays animated greeting,
     titles, intro paragraph, and 
     navigation boxes
     ------------------------------ */
  return (
    <div className="flex items-center justify-center flex-col text-center 
    pt-20 pb-20 px-6">
      
      {/* Greeting with Typewriter */}
      <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">
        <Typewriter
          words={[hiText]}
          loop={1}
          cursor={!hiTyped}
          cursorStyle="_"
          typeSpeed={100}
          deleteSpeed={0}
          delaySpeed={500}
        />
      </h1>

      {/* Titles with Typewriter */}
      {hiTyped && (
        <h2 className="text-xl md:text-3xl font-medium mb-6 min-h-[2rem]">
          <Typewriter
            words={titles}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
      )}

      {/* Intro Paragraph + Navigation Boxes */}
      {showParagraph && (
        <>
          <motion.p
            className="text-base md:text-lg max-w-2xl mb-12 
            leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Explore my projects, learn more about me, and feel free to 
            get in touch!
          </motion.p>

          <div className="flex flex-col md:flex-row gap-6 justify-center 
          mb-20">
            {boxes.map((box, index) => (
              <motion.div
                key={box.label}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 * index, duration: 0.8 }}
                className="cursor-pointer rounded-2xl border-2 
                border-stone-900 bg-stone-900 text-[#f6f4f0] px-6 py-4 
                shadow-md hover:bg-transparent hover:text-stone-900 
                hover:border-stone-900 transition-all duration-200 
                flex items-center justify-center"
              >
                <Link to={box.link}>{box.label}</Link>
              </motion.div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;










