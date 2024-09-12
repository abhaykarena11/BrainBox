import React from 'react';
import { Link } from 'react-router-dom';
const InfoCard = ({ imgSrc, imgAlt, title, description, buttonText,navigate }) => {
  return (
    
    <div className="bg-white rounded-lg shadow-lg p-6 flex-1">
      <div className="flex items-center mb-4">
        <img src={imgSrc} alt={imgAlt} className="w-16 h-16 rounded-full mr-4" />
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <p className="mb-4">{description}</p>
      <Link to={`/${navigate}`}>
      <button className="bg-yellow-400 text-white font-bold py-2 px-4 rounded-lg">{buttonText}</button>
      </Link>
      
    </div>
  );
};

export default InfoCard;
