'use client'
import Header from '../components/header';
import Footer from '../components/footer';
import React from 'react';
import { FaSuitcase, FaShieldAlt, FaGlobe, FaMoneyBillWave, FaCalendarAlt, FaThumbsUp } from 'react-icons/fa';

const TravelTipsPage = () => {
  const tips = [
    { icon:  <FaSuitcase className="text-5xl text-blue-500 mb-4" />, title: 'Packing Tips', description: 'Pack efficiently and travel light.' },
    { icon: <FaShieldAlt className="text-5xl text-red-500 mb-4" />, title: 'Travel Safety', description: 'Stay safe and secure during your travels.' },
    { icon: <FaGlobe className="text-5xl text-green-500 mb-4" />, title: 'Cultural Etiquette', description: 'Learn about local customs and etiquette to respect the culture.' },
    { icon: <FaMoneyBillWave className="text-5xl text-yellow-500 mb-4" />, title: 'Budget Travel', description: 'Discover money-saving tips and tricks for budget-friendly travel.' },
    { icon: <FaCalendarAlt className="text-5xl text-purple-500 mb-4" />, title: 'Travel Planning', description: 'Plan your trips effectively..' },
    { icon: <FaThumbsUp className="text-5xl text-pink-500 mb-4" />, title: 'Travel Hacks', description: 'Explore useful travel hacks to enhance your travel experience.' },
  ];

  const handleMouseEnter = (index) => {
    const tipElement = document.getElementById(`tip-description-${index}`);
    if (tipElement) {
      tipElement.style.opacity = 1;
    }
  };

  const handleMouseLeave = (index) => {
    const tipElement = document.getElementById(`tip-description-${index}`);
    if (tipElement) {
      tipElement.style.opacity = 0;
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto py-14">
        <h1 className="text-3xl font-bold text-center mb-8">Travel Tips</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="p-14 border border-bg-white rounded-2xl flex flex-col items-center relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {tip.icon} {/* Check if the icon is rendered here */}
              <h2 className="text-xl font-semibold mb-2">{tip.title}</h2>
              <p
                id={`tip-description-${index}`}
                className="text-gray-700 text-center opacity-0 absolute bottom-0 left-0 right-0 bg-white p-4 rounded-lg transition-opacity duration-300"
              >
                {tip.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TravelTipsPage;
