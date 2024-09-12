import React from 'react';

const HeroSectionLeft = () => {
  return (
    <div className="text-white md:w-1/2">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Learn Subjects Faster & Easier On BrainBox<span className='text-xl mx-1'>.com</span></h1>
      <ul className="space-y-2">
        <li className="flex items-center">
          <i className="fas fa-check-circle text-xl mr-2"></i>
          <span>Aligned to Federal and State Standards</span>
        </li>
        <li className="flex items-center">
          <i className="fas fa-check-circle text-xl mr-2"></i>
          <span>Prepares Students for Standardized Testing</span>
        </li>
        <li className="flex items-center">
          <i className="fas fa-check-circle text-xl mr-2"></i>
          <span>Powerful District and Classroom Management</span>
        </li>
      </ul>
    </div>
  );
};

export default HeroSectionLeft;
