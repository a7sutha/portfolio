/* 
  File Name: Services.jsx
  Student Name: Avinnash Suthaharan
  Student ID: 301488418
  Date: 2025-09-25
*/

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

/* ============================================================
   Constant: services
   Description:
   Array of available services with their titles and 
   corresponding image paths.
   ============================================================ */
const services = [
  { title: "Web Development", img: "/web.png" },
  { title: "Mobile Apps", img: "/mobile.png" },
  { title: "UI/UX Design", img: "/design.png" },
];

/* ============================================================
   Function: Services
   Description:
   Renders the services section with a typewriter heading, 
   animated intro paragraph, and a responsive grid of 
   service cards.
   ============================================================ */
export default function Services() {
  /* ------------------------------
     State: titleTyped
     Purpose: Tracks when the 
     typewriter animation has 
     completed
     ------------------------------ */
  const [titleTyped, setTitleTyped] = useState(false);

  /* ------------------------------
     Effect: Typing Delay
     Purpose: Waits for typewriter 
     effect to finish before showing 
     intro text and services grid
     ------------------------------ */
  useEffect(() => {
    const timeout = setTimeout(() => setTitleTyped(true), 1800);
    return () => clearTimeout(timeout);
  }, []);

  /* ------------------------------
     Return: JSX
     Purpose: Displays animated 
     section heading, description, 
     and service cards
     ------------------------------ */
  return (
    <div className="flex flex-col items-center px-6 py-20">
      
      {/* Heading with Typewriter */}
      <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 
      text-center">
        <Typewriter
          words={["My Services..."]}
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
          text-center text-gray-800"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          These are some of the services I offer to help bring your ideas 
          to life.
        </motion.p>
      )}

      {/* Services Grid */}
      {titleTyped && (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.15, duration: 0.8 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 1 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6, type: 
                "spring", stiffness: 120 }}
              className="rounded-2xl p-6 flex flex-col items-center border-2 border-stone-900 bg-transparent cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <img src={service.img} alt={service.title} className="w-20 
              h-20 mb-4" />
              <h3 className="text-xl font-semibold text-stone-900">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}




