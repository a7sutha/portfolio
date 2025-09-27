/* 
  File Name: Contact.jsx
  Student Name: Avinnash Suthaharan
  Student ID: 301488418
  Date: 2025-09-25
*/

import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import ContactForm from './ContactForm';
import { motion } from 'framer-motion';

/* ============================================================
   Function: Contact
   Description:
   Renders the "Contact Me" section with a typewriter heading, 
   animated introductory text, and a contact form component.
   ============================================================ */
export default function Contact() {
  /* ------------------------------
     State: titleTyped
     Purpose: Tracks when the 
     typewriter animation is complete
     ------------------------------ */
  const [titleTyped, setTitleTyped] = useState(false);

  /* ------------------------------
     Effect: Typing Delay
     Purpose: Delays the appearance of
     text and form until typewriter
     animation finishes
     ------------------------------ */
  useEffect(() => {
    const timeout = setTimeout(() => setTitleTyped(true), 2000);
    return () => clearTimeout(timeout);
  }, []);

  /* ------------------------------
     Return: JSX
     Purpose: Displays heading with 
     typewriter, contact info, and 
     contact form
     ------------------------------ */
  return (
    <div className="flex flex-col items-center px-6 py-20">
      {/* Heading with Typewriter Effect */}
      <h2 className="text-4xl md:text-7xl mb-6 font-bold text-center 
      text-gray-900">
        <Typewriter
          words={['Contact Me!']}
          loop={1}
          cursor
          cursorStyle="_"
          typeSpeed={100}
          deleteSpeed={0}
          delaySpeed={500}
          onLoopDone={() => setTitleTyped(true)}
        />
      </h2>

      {/* Contact Info with Animation */}
      {titleTyped && (
        <motion.p
          className="text-base md:text-lg max-w-2xl mb-12 leading-relaxed 
          text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Feel free to reach out to me via email at{' '}
          <a
            href="mailto:asuthah2@my.centennialcollege.ca"
            className="hover:text-blue-600 transition-colors"
          >
            asuthah2@my.centennialcollege.ca
          </a>{' '}
          or connect with me on{' '} 
          <a
            href="https://www.linkedin.com/in/avinnash-suthaharan-9319b3220/"
            className="hover:text-blue-600 transition-colors"
            target="_blank"
          >
            LinkedIn.
          </a>
        </motion.p>
      )}

      {/* Contact Form Component */}
      {titleTyped && <ContactForm />}
    </div>
  );
}

