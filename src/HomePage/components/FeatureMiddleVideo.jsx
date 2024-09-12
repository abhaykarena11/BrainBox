import React from 'react';

function FeatureMiddleVideo({ icon, title, description,setCurrentVideo,index }) {
    const changeVideoHandler= ()=> {
        setCurrentVideo(index);
    }
  return (
    <div className="flex items-start space-x-4 pl-2 rounded-tl-lg rounded-bl-lg py-5 hover:bg-blue-200" onMouseEnter={changeVideoHandler}>
      <div className="bg-blue-100 p-4 rounded-full">
        <i className={`fas ${icon} text-blue-500 text-2xl`}></i>
      </div>
      <div>
        <h2 className="text-xl font-bold text-blue-700">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default FeatureMiddleVideo;
