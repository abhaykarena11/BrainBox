import React from 'react';
import HeroSectionLeft from './components/HeroSectionLeft';
import InfoCard from './components/InfoCard';
import './Gradient.css';
import icon1 from '../icons/learner-2.svg'
import icon2 from '../icons/educator-2.svg'
const Hero = () => {
  return (
    <div className="gradientStyleHero min-h-screen flex items-center justify-center">
      <div className="max-w-6xl space-x-2 mx-auto p-6 flex flex-col md:flex-row items-center">
        <HeroSectionLeft />
        <div className="md:w-1/2 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-6 md:mt-0">
          <InfoCard 
            imgSrc={icon1}
            imgAlt="Person typing on a laptop"
            title="Learn subject for Free"
            description="Join millions of Students and learn at own pace with lessons and student-led progression & Grow with our platform - BrainBox.com"
            buttonText="Start Learning Now »"
            navigate=""
          />
          <InfoCard 
            imgSrc={icon2}
            imgAlt="Instructor managing class"
            title="For Instructors and Admins"
            navigate="signup"
            description="Manage class and student-level settings and meet student needs with timed tests, custom lessons, auto reporting and more."
            buttonText="Sign Up Now »"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
