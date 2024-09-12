import React from 'react';

const FeatureCard = ({ icon, text }) => {
    return (
        <div className="text-center flex flex-col items-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-2">
                <i className={`${icon} text-2xl text-blue-500`}></i>
            </div>
            <p className="text-blue-600 font-medium">{text}</p>
        </div>
    );
};

export default FeatureCard;
