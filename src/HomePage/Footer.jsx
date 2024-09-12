import React from 'react';


const Footer = () => {
  return (
    <div className="bg-gray-800 text-gray-300 py-10">
      
        <div className="flex w-full justify-around gap-40">
          {/* First Column */}
          <div className="flex gap-40 ">
          <div>
            <ul>
              <li className="mb-2">Instructors</li>
              <li className="mb-2">Schools </li>
              <li className="mb-2">Homeschool</li>
              <li className="mb-2">PLUS Edition</li>
              <li className="mb-2">Students</li>
            </ul>
          </div>
          
          {/* Second Column */}
          <div>
            <ul>
              <li className="mb-2">Coding Lessons</li>
              <li className="mb-2">Coding Test</li>
              <li className="mb-2">Codin Games</li>
              <li className="mb-2">Digital Literacy</li>
              <li className="mb-2">Coding Curriculum</li>
            </ul>
          </div>
          </div>
          
          
          {/* Third Column */}
          <div className="flex items-center">
            <div className="text-center">
              <p className="mb-2">Powered by:</p>
              <div className="flex items-center justify-center">
              <i class="fas fa-lightbulb text-yellow-500 text-2xl mr-2"></i>
                <span className="text-white font-bold text-xl">
                  BrainBox<span className="text-yellow-500">.com</span>
                </span>
              </div>
            </div>
          </div>
       
      </div>
    </div>
  );
};

export default Footer;
