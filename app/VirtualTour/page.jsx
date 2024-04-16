'use client'
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { useSpeechSynthesis } from 'react-speech-kit';

const ReactPhotoSphereViewer = dynamic(
  () => import('react-photo-sphere-viewer').then(mod => mod.ReactPhotoSphereViewer),
  { ssr: false }
);

const Home = () => {
  const { speak } = useSpeechSynthesis();
  const [speechText, setSpeechText] = useState('');

  const handleBookNowClick = () => {
    setSpeechText("You've clicked Book Now button. Please proceed with your booking.");
    speak({ text: speechText });
  };

  const handleInfoClick = () => {
    setSpeechText("The Kwame Nkrumah Memorial Park (KNMP) is located in downtown Accra, the capital of Ghana. It is dedicated to the prominent Ghanaian leader Osagyefo Dr. Kwame Nkrumah. The memorial complex was dedicated in 1992, and is situated on the site of the former British colonial polo grounds, where the independence of Ghana was declared, in Accra. The KNMP's mausoleum, designed by Don Arthur, houses the bodies of Dr. Kwame Nkrumah and his wife Fathia Nkrumah. The building is meant to represent an upside-down sword, which in Akan culture is a symbol of peace. The mausoleum is clad from top to bottom with Italian marble, with a black star at its apex to symbolize unity. The mausoleum is clad from top to bottom with Italian marble, with a black star at its apex to symbolize unity.");
    speak({ text: speechText });
  };

  return (
    <div className="App relative">
      <ReactPhotoSphereViewer src="./360 IMAGES/center.jpeg" height="100vh" width="100%" />
      <div className="absolute bottom-4 left-4 flex flex-col gap-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer" onClick={handleBookNowClick}>Book Now</button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer" onClick={handleInfoClick}>Info</button>
      </div>
    </div>
  );
}

export default Home;
