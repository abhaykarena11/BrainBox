import React from 'react';
import { Link } from 'react-router-dom';
import icon3 from '../icons/teacher-presenting-2.svg'

function LastSecond() {
    return (
        <div className="flex justify-center items-center my-20 mx-auto" style={{width: "95%"}}>
            <div className="bg-white rounded-lg shadow-lg p-8 flex items-center space-x-8" style={{ backgroundColor: '#ecf9ff' }}>
                <img src={icon3} alt="Illustration of a teacher " className="h-48 scale-x-[-1] origin-center"/>
                <div>
                    <h1 className="text-2xl font-bold text-blue-600">Teachers and Administrators, Get Started Today</h1>
                    <p className="text-blue-600 mt-4">Grade, track, and report on students' progress in real time. Unlimited students, unlimited classes, unlimited teachers, unlimited schools. BrainBox.com's teacher portal is FREE!</p>
                    <div className="mt-6 flex space-x-4">
                        <Link to="/signup">
                        <button className="bg-yellow-400 text-blue-600 font-bold py-2 px-4 rounded-lg shadow-md hover:bg-yellow-500">Sign Up Now »</button>
                        </Link>
                        
                        <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded-lg shadow-md border border-blue-600 hover:bg-blue-100">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LastSecond;
