// src/App.js
import React, { useState } from 'react';

const Testimonial = () => {
    const [active,setActive] = useState(0);
    const user = [
        {
            userName:"Erin Lee",
            userLocation:"Alberta, CA",
            userProfileImage:"https://img.freepik.com/premium-vector/logo-design_1016686-830.jpg",
            userTestimonial:" My students cannot get enough of Typing.com! The themes and interactive lessons keep the students engaged all class. I love that it does absolutely everything for me and makes my life so much easier!"
        },
        {
            userName:"Leo Das",
            userLocation:"Alberta, IN",
            userProfileImage:"https://img.freepik.com/premium-vector/logo-design_1016686-830.jpg",
            userTestimonial:" Thanks to this course, I've developed a more efficient study habit. The interactive features make complex topics easy to grasp and retain me and makes my life so much easier!"
        },
        {
            userName:"Dili Ds",
            userLocation:"Kerala, IN",
            userProfileImage:"https://img.freepik.com/premium-vector/logo-design_1016686-830.jpg",
            userTestimonial:"The course's user-friendly design and interactive content have significantly enhanced my study sessions, making learning more productive and less stressful me and makes my life so much easier!"
        },
        {
            userName:"Nyima Shrestha",
            userLocation:"Pokhara, NP",
            userProfileImage:"https://img.freepik.com/premium-vector/logo-design_1016686-830.jpg",
            userTestimonial:" The interactive features of this course have transformed how I study, turning learning into an engaging experience. It breaks down complex subjects into manageable chunks, which has greatly"
        },
    ];
    const clickHandler = () => {
        const set =( active + 1 ) % user.length;
        setActive(set);
    }
  return (
    
    <div className="flex items-center justify-center space-x-8 p-8 bg-blue-500">
     <div>
     <div className="text-center text-white mb-8">
        <h1 className="text-4xl font-bold">Preparing Students for the Future</h1>
      </div>
      <div className="flex space-x-4 mb-8">
        <div className="bg-white text-blue-500 font-bold py-2 px-4 rounded-lg shadow-md">
          <span className="text-2xl">386,000+</span> students
        </div>
        <div className="bg-white text-green-500 font-bold py-2  px-4 rounded-lg shadow-md">
          <span className="text-2xl">7,200+</span> Instructors
        </div>
      </div>
      <div className="text-white text-lg mb-8">
        Tens of thousands of schools rely on us every year.
      </div>
     </div>
     <div className="flex flex-col items-center" onClick={clickHandler}>  
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg ">
        <div className="text-blue-500 text-4xl mb-4">
          <i className="fas fa-quote-left"></i>
        </div>
        <p className="text-blue-500 text-lg mb-4">
         {user[active].userTestimonial}
        </p>
        <div className="flex items-center">
          <img
            src={`${user[active].userProfileImage}`}
            alt="Erin Lee"
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <p className="text-blue-500 font-bold">{user[active].userName}</p>
            <p className="text-gray-500">{user[active].userLocation}</p>
          </div>
        </div>
      </div>
      <div className="flex space-x-2 mt-4">
        <div className={`w-3 h-3 ${active % 4 === 0 ? "bg-white": "bg-blue-300"}  rounded-full`}></div>
        <div className={`w-3 h-3 ${active % 4 === 1 ? "bg-white": "bg-blue-300"}  rounded-full`}></div>
        <div className={`w-3 h-3 ${active % 4 === 2 ? "bg-white": "bg-blue-300"}  rounded-full`}></div>
        <div className={`w-3 h-3 ${active % 4 === 3 ? "bg-white": "bg-blue-300"}  rounded-full`}></div>
      </div>
      </div>
    </div>
  );
};

export default Testimonial;
