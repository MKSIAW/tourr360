'use client'
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useSpeechSynthesis } from 'react-speech-kit';
import Link from 'next/link';
import { FaBook, FaImage, FaPlay, FaPause, FaHandPointer } from 'react-icons/fa';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';

const ReactPhotoSphereViewer = dynamic(
  () => import('react-photo-sphere-viewer').then(mod => mod.ReactPhotoSphereViewer),
  { ssr: false }
);

const Home = () => {
  const { speak, speaking } = useSpeechSynthesis();
  const [speechText, setSpeechText] = useState('');
  const [currentImage, setCurrentImage] = useState('./360/reception.jpg');
  const [showImages, setShowImages] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    // Initial speech on component mount
    setSpeechText("Welcome to Tour360. Click on the image to explore.");
    speak({ text: speechText });
    return () => {
      // Clean up on component unmount
      // cancel(); // Removed because useSpeechSynthesis doesn't provide cancel
    };
  }, []);

  const handlePlayPause = () => {
    setIsPlaying(prevState => !prevState); // Toggle play/pause state
    if (speaking) {
      speak({ text: '' }); // Pause speech
    } else {
      speak({ text: speechText }); // Resume speech
    }
  };

  const handleSpeechToggle = () => {
    // Toggle speech between pause and play
    if (speaking) {
      speak({ text: '' }); // Pause speech
    } else {
      speak({ text: speechText }); // Resume speech
    }
  };

  const handleImageClick = (imageSrc, speech) => {
    // Change image and speak new speech text
    setCurrentImage(imageSrc);
    setSpeechText(speech);
    speak({ text: speech });
  };

  const handleToggleImages = () => {
    setShowImages(!showImages);
  };

  const handleBookNowClick = () => {
    setSpeechText("Please proceed with your booking.");
    speak({ text: speechText });
  };

  const plugins = [
    {
      name: MarkersPlugin, // Pass the MarkersPlugin component as the value
      markers: [
        {
          id: 'marker1',
          longitude: 0,
          latitude: 0,
          image: 'images/pin-red.jpg',
          width: 32,
          height: 32,
          html: <FaHandPointer />,
          style: {
            transform: 'translate(-50%, -50%)',
            cursor: 'pointer',
          },
          tooltip: 'Click to view another 360 image',
          handleClick: () => { /* Handle click event for the marker */ }
        },
        // Add more markers as needed
      ]
    }
  ];

  return (
    <div className="App relative">
      <ReactPhotoSphereViewer
        src={currentImage}
        height="100vh"
        width="100%"
        plugins={plugins}
        onRender={() => setIsPlaying(true)} // Ensure auto-rotation starts when rendering
        autorotate={isPlaying} // Auto-rotation controlled by play/pause state
        autorotateDelay={100} // Auto-rotation delay in milliseconds
      />
      {/* Buttons and icons section */}
      <div className="absolute bottom-10 left-4 flex gap-4">
        <button className="focus:outline-none" onClick={handleBookNowClick}>
          <FaBook className="text-white cursor-pointer" size={32} />
        </button>
        <button className="focus:outline-none" onClick={handleToggleImages}>
          <FaImage className="text-white cursor-pointer" size={32} />
        </button>
        {speaking ? (
          <FaPause className="text-white cursor-pointer" size={32} onClick={handleSpeechToggle} />
        ) : (
          <FaPlay className="text-white cursor-pointer" size={32} onClick={handleSpeechToggle} />
        )}
      </div>
      {/* Images section */}
      {showImages && (
        <div className="absolute bottom-24 left-4 flex gap-4">
          {/* Display additional images here */}
        </div>
      )}
    </div>
  );
};

export default Home;
