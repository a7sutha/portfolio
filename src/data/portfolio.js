/* 
  File Name: portfolio.js
  Student Name: Avinnash Suthaharan
  Student ID: 301488418
  Date: 2025-09-25
*/

import project1Img from '../assets/project1.png';
import project2Img from '../assets/project2.png';
import project3Img from '../assets/project3.png';

/* ============================================================
   Constant: portfolio
   Description:
   Array of project objects containing details for the 
   portfolio section, including title, image, technology 
   stack, and project link.
   ============================================================ */
const portfolio = [
  {
    title: "Terminal Website (In Progress)",
    imgUrl: project1Img,
    stack: ["HTML", "CSS", "JavaScript"],
    link: "/projects/project-one",
  },
  {
    title: "Developer Portfolio",
    imgUrl: project2Img,
    stack: ["React", "Tailwind", "Vite"],
    link: "/projects/project-two",
  },
  {
    title: "NES Emulator (In Progress)",
    imgUrl: project3Img,
    stack: ["JavaScript", "Canvas API", "Web Audio API"],
    link: "/projects/project-three",
  },
];

export default portfolio;

