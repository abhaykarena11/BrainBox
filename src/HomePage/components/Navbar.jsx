import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Gradient.css';
function Navbar() {
  const [instructorsOpen, setInstructorsOpen] = useState(false);
  const [studentsOpen, setStudentsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <div className="sticky top-0 gradientStyleNav text-white flex justify-between items-center p-4">
      <div className="flex items-end space-x-1">
         <span className="text-3xl font-bold">BrainBox</span>
         <span className="text-base">.com</span>
      </div>

      <div className="hidden md:flex items-center space-x-6">

      <div
          className="relative group"
          onClick={() => {
            setInstructorsOpen(!instructorsOpen);
            setStudentsOpen(false);

          }}
        >
          <button className="flex items-center space-x-1 focus:outline-none">
            <span>Instructors</span>
            <i className="fas fa-caret-down"></i>
          </button>
          {instructorsOpen && (
            <div className="absolute top-full mt-2 option-color text-white rounded shadow-lg py-2 w-48">
             <Link to="/page1" className="block px-4 py-2 hover-color text-white"> Option 1</Link>
             <Link to="/page1" className="block px-4 py-2 hover-color text-white"> Option 2</Link>
             <Link to="/page1" className="block px-4 py-2 hover-color text-white">Option 3</Link>
            </div>
          )}
        </div>

        {/* Students Dropdown */}
        <div
          className="relative group"
          onClick={() => {
            setStudentsOpen(!studentsOpen);
            setInstructorsOpen(false);
          }
          }
        >
          <button className="flex items-center space-x-1 focus:outline-none">
            <span>Students</span>
            <i className="fas fa-caret-down"></i>
          </button>
          {studentsOpen && (
            <div className="absolute top-full mt-2 option-color text-white rounded shadow-lg w-48">
              <Link to="/page1" className="block px-4 py-2 hover-color text-white"> Option 1</Link>
              <Link to="/page1" className="block px-4 py-2 hover-color text-white"> Option 2</Link>
              <Link to="/page1" className="block px-4 py-2 hover-color text-white">Option 3</Link>
            </div>
          )}
        </div>

        <div className="flex items-center space-x-2">
          {/* <img src="https://placehold.co/20x20" alt="US flag" className="w-5 h-5"/> */}
          <span>🏳️‍⚧️ US English</span>
        </div>
        <div className="flex space-x-4">
            <Link to="/login">
            <button className="bg-transparent border border-white text-white font-semibold py-1.5 px-3.5 rounded hover:bg-white hover:text-blue-500 transition-colors duration-300">
            Log In
          </button>
            </Link>
         <Link to="/signup">
         <button className="bg-transparent border border-white text-white font-semibold py-1.5 px-3.5 rounded hover:bg-white hover:text-blue-500 transition-colors duration-300">
            Sign Up
          </button>
         </Link>
         
        </div>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </div>
      {menuOpen && (
        <div className="absolute top-16 right-4 bg-blue-500 text-white p-4 rounded shadow-lg flex flex-col space-y-4">
          <div className="flex items-center space-x-1">
            <span>Instructors</span>
            <i className="fas fa-caret-down"></i>
          </div>
          <div className="flex items-center space-x-1">
            <span>Students</span>
            <i className="fas fa-caret-down"></i>
          </div>
          <div className="flex items-center space-x-2">
            {/* <img src="https://placehold.co/20x20" alt="US flag" className="w-5 h-5"/> */}
            <span>🏳️‍⚧️ US English</span>
          </div>
          <span>Log In</span>
          <button className="border border-white px-4 py-1 rounded">Sign Up</button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
