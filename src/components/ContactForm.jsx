/* 
  File Name: ContactForm.jsx
  Student Name: Avinnash Suthaharan
  Student ID: 301488418
  Date: 2025-09-25
*/

import React from 'react';
import { motion } from 'framer-motion';

/* ============================================================
   Function: ContactForm
   Description:
   Renders a motion-animated contact form with input fields for 
   name, email, message, and a submit button. Uses Framer Motion 
   for smooth animations.
   ============================================================ */
export default function ContactForm() {
  /* ------------------------------
     Constant: fields
     Purpose: Defines form fields to 
     dynamically generate input elements
     ------------------------------ */
  const fields = ['name', 'email'];

  /* ------------------------------
     Return: JSX
     Purpose: Displays animated form 
     with inputs, textarea, and submit 
     button
     ------------------------------ */
  return (
    <motion.div
      className="w-full flex justify-center -mt-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <form 
        action="https://getform.io/f/akkprwda" 
        method="POST"
        className="flex flex-col w-full max-w-2xl gap-4"
      >
        {/* Input Fields */}
        {fields.map((field, index) => (
          <motion.input
            key={field}
            type="text"
            name={field}
            placeholder={field === 'email' ? 'Email Address' : 'First Name'}
            className="p-3 bg-transparent border-2 border-stone-700 
            rounded-2xl focus:outline-none focus:ring-2 
            focus:ring-stone-700 transition-all"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
          />
        ))}

        {/* Message Textarea */}
        <motion.textarea
          name="message"
          placeholder="Message"
          rows="6"
          className="p-3 bg-transparent border-2 border-stone-700 
          rounded-2xl focus:outline-none focus:ring-2 
          focus:ring-stone-700 transition-all"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        />

        {/* Submit Button */}
        <motion.button
          type="submit"
          className="w-max px-8 py-3 mt-2 bg-stone-900 text-[#f6f4f0] 
          rounded-2xl border-2 border-stone-700 hover:bg-transparent 
          hover:text-stone-900 transition-all duration-200 self-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
  );
}

