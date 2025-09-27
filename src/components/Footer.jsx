/* 
  File Name: Footer.jsx
  Student Name: Avinnash Suthaharan
  Student ID: 301488418
  Date: 2025-09-25
*/

import React from 'react';

/* ============================================================
   Function: Footer
   Description:
   Renders the footer section with the current year and a 
   copyright notice.
   ============================================================ */
function Footer() {
  /* ------------------------------
     Return: JSX
     Purpose: Displays footer text 
     with dynamic year
     ------------------------------ */
  return (
    <div>
      <p className="text-sm mt-2 opacity-50">&copy; 
        {new Date().getFullYear()} Avinnash Suthaharan. 
        All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
