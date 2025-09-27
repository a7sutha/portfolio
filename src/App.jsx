/* 
  File Name: App.jsx
  Student Name: Avinnash Suthaharan
  Student ID: 301488418
  Date: 2025-09-25
*/

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import ContactForm from './components/ContactForm.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Projects from './components/Projects.jsx';
import Services from './components/Services.jsx';

/* ============================================================
   Function: App
   Description:
   Main application component that sets up routing with 
   React Router, and renders Navbar, Footer, and main 
   content for different routes.
   ============================================================ */
function App() {
  /* ------------------------------
     Return: JSX
     Purpose: Wraps the app in Router, displays Navbar, 
     dynamic route content, and Footer
     ------------------------------ */
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

