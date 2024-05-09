'use client'
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useSpeechSynthesis } from 'react-speech-kit';
import { FaBook, FaImage, FaPlay, FaPause, FaMapMarker, FaStar, FaMoneyBill, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const ReactPhotoSphereViewer = dynamic(
  () => import('react-photo-sphere-viewer').then(mod => mod.ReactPhotoSphereViewer),
  { ssr: false }
);

const Home = () => {
  const { speak, speaking, cancel } = useSpeechSynthesis();
  const [speechText, setSpeechText] = useState('');
  const [currentImage, setCurrentImage] = useState('./360/reception.jpg');
  const [showImages, setShowImages] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [placeImages, setPlaceImages] = useState([
    './images/kwame.jpg',
    './images/kwame2.jpg',
    './images/kwame3.jpg',
  ]);

  const [markers, setMarkers] = useState([
    {
      id: 'new-marker',
      position: { yaw: '45deg', pitch: '0deg' },
      image: './images/pin-red.png',
      size: { width: 50, height: 50 },
      src: './360/BKNF7237.JPG',
      speech: 'Speech for marker 1',
      onClick: () => handleMarkerClick('new-marker', './360/another-image.jpg', 'Another image speech'), // Example onClick event for marker
    },
  ]);

  useEffect(() => {
    // Initial speech on component mount
    setSpeechText("The Kwame Nkrumah Memorial Park is located in downtown Accra, the capital of Ghana. It is dedicated to the prominent Ghanaian leader Osagyefo Dr. Kwame Nkrumah. The memorial complex was dedicated in 1992, and is situated on the site of the former British colonial polo grounds, where the independence of Ghana was declared, in Accra. The KNMP's mausoleum, designed by Don Arthur, houses the bodies of Dr. Kwame Nkrumah and his wife Fathia Nkrumah. The building is meant to represent an upside-down sword, which in Akan culture is a symbol of peace. The mausoleum is clad from top to bottom with Italian marble, with a black star at its apex to symbolize unity. The mausoleum is clad from top to bottom with Italian marble, with a black star at its apex to symbolize unity.");
    speak({ text: speechText });
    return () => {
      // Clean up on component unmount
      cancel();
    };
  }, []);

  const handleMarkerClick = (markerId, imageSrc, speech) => {
    // Change image and speak new speech text
    setCurrentImage(imageSrc);
    setSpeechText(speech);
    speak({ text: speech });
    // Stop autorotation when a marker is clicked
    setIsPlaying(false);
  };

  const handlePlayPause = () => {
    setIsPlaying(prevState => !prevState);
    // Toggle speech synthesis based on play/pause state
    if (!speaking && !isPlaying) {
      speak({ text: speechText });
    } else if (speaking && isPlaying) {
      cancel();
    }
  };

  const handlePause = () => {
    setIsPlaying(false);
    cancel(); // Pause speech
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const toggleLightbox = () => {
    setLightboxOpen(!lightboxOpen);
  };

  const handlePrevImage = () => {
    setLightboxIndex(prevIndex => (prevIndex === 0 ? placeImages.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setLightboxIndex(prevIndex => (prevIndex === placeImages.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="App relative">
      <ReactPhotoSphereViewer
        src={currentImage}
        height="100vh"
        width="100%"
        plugins={[
          [
            MarkersPlugin,
            {
              markers,
              onMarkerClick: handleMarkerClick,
              autorotate: true,
              onClick: (marker) => marker.onClick(),
            },
          ],
        ]}
        onRender={() => setIsPlaying(true)}
        autorotate={true}
        autorotateDelay={1000}
      />
      {/* Buttons and icons section */}
      <div className="absolute bottom-10 left-4 flex gap-4">
        <button className="focus:outline-none" onClick={toggleModal}>
          <FaBook className="text-white cursor-pointer" size={32} />
        </button>
        <button className="focus:outline-none" onClick={toggleLightbox}>
          <FaImage className="text-white cursor-pointer" size={32} />
        </button>
        {speaking ? (
          <FaPause className="text-white cursor-pointer" size={32} onClick={handlePause} />
        ) : (
          <FaPlay className="text-white cursor-pointer" size={32} onClick={handlePlayPause} />
        )}
      </div>
      {/* Lightbox for images */}
      {lightboxOpen && (
        <div className="modal fixed top-0 left-0 w-full h-full flex items-end justify-center bg-black bg-opacity-50">
          <div className="modal-content p-4 rounded-t-lg">
            <div className="flex justify-between items-center mb-4">
              <button className="focus:outline-none" onClick={toggleLightbox}>
                <FaTimes className="text-gray-500 cursor-pointer" size={20} />
              </button>
            </div>
            <div className="flex justify-center items-center">
              <button className="focus:outline-none" onClick={handlePrevImage}>
                <FaChevronLeft className="text-gray-500 cursor-pointer" size={32} />
              </button>
              <img src={placeImages[lightboxIndex]} alt={`Image ${lightboxIndex + 1}`} className="h-80 mx-4" />
              <button className="focus:outline-none" onClick={handleNextImage}>
                <FaChevronRight className="text-gray-500 cursor-pointer" size={32} />
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Modal for booking */}
      {modalOpen && (
        <div className="modal fixed top-0 left-0 w-full h-full flex items-end justify-center bg-black bg-opacity-50">
          <div className="modal-content bg-white p-4 rounded-t-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Kwame Nkrumah Memorial Park & Mausoleum</h2>
              <button className="focus:outline-none" onClick={toggleModal}>
                <FaTimes className="text-gray-500 cursor-pointer" size={20} />
              </button>
            </div>
            <div className="flex items-center mb-2">
              <FaMapMarker className="text-gray-600 mr-2" />
              <span>GQVV+9M8, Accra</span>
            </div>
            <div className="flex items-center mb-2 mr-4">
              <FaStar className="text-yellow-500 mr-2" />
              <span>5.0</span>
            </div>
            <div className="flex items-center mb-2">
              <FaMoneyBill className="text-green-500 mr-2" />
              <span>GHS 250</span>
            </div>
            <Link href="/booking">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
