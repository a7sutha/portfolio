/* 
  File Name: main.jsx
  Student Name: Avinnash Suthaharan
  Student ID: 301488418
  Date: 2025-09-25
*/

import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/tailwind.css';
import App from './App.jsx';

/* ============================================================
   Entry Point: main.jsx
   Description:
   Initializes the React application by creating the root 
   and rendering the App component into the HTML element 
   with id "root".
   ============================================================ */
createRoot(document.getElementById('root')).render(
  <App />
);
