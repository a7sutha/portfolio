/* 
  File Name: About.jsx
  Student Name: Avinnash Suthaharan
  Student ID: 301488418
  Date: 2025-09-25
*/

import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import profilePic from "../assets/me.png";

/* ============================================================
   Function: About
   Description: 
   Renders the "About Me" section with a typewriter heading, 
   animated profile image, and introductory text. Includes 
   a resume link with hover effects.
   ============================================================ */
function About() {
  /* ------------------------------
     State: nameTyped
     Purpose: Tracks when the 
     typewriter animation is complete
     ------------------------------ */
  const [nameTyped, setNameTyped] = useState(false);

  /* ------------------------------
     Effect: Typing Delay
     Purpose: Ensures a delay before 
     revealing profile picture & content
     ------------------------------ */
  useEffect(() => {
    const timeout = setTimeout(() => setNameTyped(true), 1600);
    return () => clearTimeout(timeout);
  }, []);

  /* ------------------------------
     Return: JSX
     Purpose: Displays the heading, 
     animated profile picture, bio text, 
     and resume link
     ------------------------------ */
  return (
    <div className="flex flex-col items-center text-center px-6 py-20">
      {/* Heading with Typewriter Effect */}
      <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
        <Typewriter
          words={["About Me..."]}
          loop={1}
          cursor
          cursorStyle="_"
          typeSpeed={100}
          deleteSpeed={0}
          delaySpeed={500}
          onLoopDone={() => setNameTyped(true)}
        />
      </h2>

      {/* Animated Profile Image */}
      {nameTyped && (
        <motion.img
          src={profilePic}
          alt="Avi Suthaharan"
          className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-full 
          shadow-md mb-6 cursor-pointer"
          initial={{ opacity: 0, scale: 0, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          whileHover={{ scale: 1.05, rotate: 3 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 120 }}
        />
      )}

      {/* Bio Section with Resume Link */}
      {nameTyped && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="text-base md:text-lg max-w-2xl mb-8 
          leading-relaxed">
            Hi! I’m Avi, a passionate developer with experience in 
            building web applications using modern tools like React and 
            Vite. I enjoy creating efficient, user-friendly solutions and 
            am always eager to learn and grow in the tech field.
          </p>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border-2 border-stone-900 
            bg-stone-900 text-[#f6f4f0] rounded-md hover:bg-transparent 
            hover:text-stone-900 transition-all duration-200"
          >
            View My Resume
          </a>
        </motion.div>
      )}
    </div>
  );
}

export default About;



