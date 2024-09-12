import React, { useState } from 'react';
import FeatureMiddleVideo from './components/FeatureMiddleVideo';
import VideoSection from './components/VideoSection';

function MiddleVideo() {
    const [currentVideo,setCurrentVideo]=useState(0);
    const videoLink = [
        {
            URL:"https://www.w3schools.com/html/mov_bbb.mp4"
        },
        {
            URL:"https://www.w3schools.com/html/mov_bbb.mp4"
        },
        {
            URL:"https://www.w3schools.com/html/mov_bbb.mp4"
        },
        {
            URL:"https://www.w3schools.com/html/mov_bbb.mp4"
        },  
    ];
  const features = [
    {
      icon: 'fas fa-graduation-cap',
      title: 'Engaging Curriculum',
      description: 'Students learn valuable technology fundamentals – designed by experts for students of every skill level.'
    },
    {
      icon: 'fas fa-star',
      title: 'Gamified Learning',
      description: 'Engage students with fun typing games, interactive lessons, and achievements.'
    },
    {
      icon: 'fas fa-cogs',
      title: 'Make it Your Own',
      description: 'Enhance learning by creating your own lessons for cross-curricular reinforcement.'
    },
    {
      icon: 'fas fa-file-alt',
      title: 'Standardized Test Prep Solution',
      description: 'Prepare your students for standardized testing with free response typing lessons.'
    }
  ];

  return (
    <div className="mx-auto py-10" style={{width:"95%"}}>
      <h1 className="text-4xl text-center mb-10">Why You'll Love BrainBox.com</h1>
      <div className="flex justify-between ">
        <div className="mt-1">
          {features.map((feature, index) => (
            <FeatureMiddleVideo
              key={index}
              index={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              setCurrentVideo={setCurrentVideo}
            />
          ))}
        </div>
        <div className="md:w-2/3 rounded-lg p-5 bg-blue-200">
          <VideoSection videoLink={videoLink} currentVideo={currentVideo}/>
        </div>
      </div>
    </div>
  );
}

export default MiddleVideo;
