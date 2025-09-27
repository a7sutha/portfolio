/* 
  File Name: PortfolioItem.jsx
  Student Name: Avinnash Suthaharan
  Student ID: 301488418
  Date: 2025-09-25
*/

import React from 'react';

/* ============================================================
   Function: PortfolioItem
   Description:
   Renders a single portfolio item card with an image, title, 
   technology stack, and link. Displays hover effects for 
   interactivity.
   ============================================================ */
function PortfolioItem({ title, imgUrl, stack, link }) {
  /* ------------------------------
     Return: JSX
     Purpose: Displays portfolio item 
     card with project image, title, 
     and stack tags
     ------------------------------ */
  return (
    <div className="p-2 px-4 py-4 bg-transparent border-2 border-stone-900
    rounded-md focus:outline-none hover:scale-105 transition delay-100">
      
      {/* Project Image */}
      <img 
        src={imgUrl} 
        alt="portfolio" 
        className="w-full h-36 md:h-48 object-cover 
        cursor-pointer" 
      />

      {/* Project Info */}
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
          {title}
        </h3>

        {/* Technology Stack */}
        <p className="flex flex-wrap gap-2 flex-row 
        items-center justify-start text-xs md:text-sm">
          {stack.map((item, index) => (
            <span 
              key={index}
              className="p-2 border-2 border-stone-900 rounded-md 
              bg-stone-900 text-[#f6f4f0] hover:bg-transparent 
              hover:text-stone-900 focus:outline-none focus:ring-2 
              focus:ring-offset-2 focus:ring-stone-900 
              transition-all duration-300"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default PortfolioItem;
