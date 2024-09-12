import React from 'react';
import FeatureCard from './components/FeatureCard';
 // Ensure Tailwind CSS is imported

const features1 = [
    { icon: 'fas fa-keyboard', text: 'Comprehensive Keyboarding' },
    { icon: 'fas fa-laptop-code', text: 'Computer Basics & Tech Literacy' },
    { icon: 'fas fa-shield-alt', text: 'Online Behavior & Safety' },
    { icon: 'fas fa-code', text: 'Coding Fundamentals' },
    { icon: 'fas fa-briefcase', text: 'Career Prep & Professionalism' },
    { icon: 'fas fa-globe', text: 'English, Spanish, & Portuguese' }
];
const features2 = [
    { icon: 'fas fa-star', text: 'Engaging Lessons, Tests, & Games' },
    { icon: 'fas fa-chart-line', text: 'Robust Reporting' },
    { icon: 'fas fa-school', text: 'Full School & District Administration Tools' },
    { icon: 'fas fa-cloud', text: 'SSO and Syncing , ClassLink, & Google' },
    { icon: 'fas fa-book', text: 'Customizable Lessons' },
    { icon: 'fas fa-file-alt', text: 'Standardized Testing Preparation' },
];
const Features = () => {
    return (
        <>
        <div className="text-center py-10 w-4/5 mx-auto">
            <h1 className="text-2xl font-bold text-blue-600 mb-6">Go Beyond Curriculum</h1>
            <h2 className="text-2xl font-bold text-blue-600 mb-10">With Digital, Coding, and Career Prep</h2>
            <div className="flex justify-center  gap-6">
                {features1.map((feature, index) => (
                    <FeatureCard key={index} icon={feature.icon} text={feature.text} />
                ))}
            </div>
        </div>
        <div className="text-center py-10 w-4/5 mx-auto mb-3">
            <h1 className="text-2xl font-bold text-blue-600 mb-10">A Free Courses Program Built for Teachers</h1>
            <div className="flex justify-center gap-6">
                {features2.map((feature, index) => (
                    <FeatureCard key={index} icon={feature.icon} text={feature.text} />
                ))}
            </div>
        </div>

        </>
    );
};

export default Features;
