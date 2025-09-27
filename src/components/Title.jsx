/* 
  File Name: Title.jsx
  Student Name: Avinnash Suthaharan
  Student ID: 301488418
  Date: 2025-09-25
*/

import React from 'react';

/* ============================================================
   Function: Title
   Description:
   Reusable title component that renders a styled heading (h1).
   Accepts children as text content and an optional id for linking.
   ============================================================ */
function Title({ children, id }) {
  /* ------------------------------
     Return: JSX
     Purpose: Displays heading with 
     underline styling and optional id
     ------------------------------ */
  return (
    <h1
      id={id && id}
      className="text-4xl font-bold underline
      underline-offset-8 decoration-4 mb-5 text-stone-900"
    >
      {children}
    </h1>
  );
}

export default Title;
