'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { useSpeechSynthesis } from 'react-speech-kit';
import { FaBook, FaImage, FaPlay, FaPause, FaMapMarker, FaStar, FaMoneyBill, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Link from 'next/link';

const ReactPhotoSphereViewer = dynamic(
  () => import('react-photo-sphere-viewer').then(mod => mod.ReactPhotoSphereViewer),
  { ssr: false }
);

const Home = () => {
  const { speak, speaking, cancel } = useSpeechSynthesis();
  const [currentImage, setCurrentImage] = useState('./360/reception.jpg');
  const [placeImages] = useState([
    './images/kwame.jpg',
    './images/kwame2.jpg',
    './images/kwame3.jpg',
    './images/kwame4.jpg',
    './images/kwame5.jpg',
    './images/kwame6.jpg',
    './images/kwame7.jpg',
    './images/kwame8.jpg',
  ]);
  const [speechText, setSpeechText] = useState(
    "The Kwame Nkrumah Memorial Park is located in downtown Accra, the capital of Ghana. It is dedicated to the prominent Ghanaian leader Osagyefo Dr. Kwame Nkrumah. The memorial complex was dedicated in 1992, and is situated on the site of the former British colonial polo grounds, where the independence of Ghana was declared, in Accra. The KNMP's mausoleum, designed by Don Arthur, houses the bodies of Dr. Kwame Nkrumah and his wife Fathia Nkrumah. The building is meant to represent an upside-down sword, which in Akan culture is a symbol of peace. The mausoleum is clad from top to bottom with Italian marble, with a black star at its apex to symbolize unity."
  );
  const [isPlaying, setIsPlaying] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleMarkerClick = (imageSrc, speech) => {
    console.log("Marker clicked!");
    setCurrentImage(imageSrc); // Update the current image
    setSpeechText(speech);
    speak({ text: speech });
    setIsPlaying(false);
  };

  const handlePlayPause = () => {
    setIsPlaying(prevState => !prevState);
    if (!speaking && !isPlaying) {
      speak({ text: speechText });
    } else if (speaking && isPlaying) {
      cancel();
    }
  };

  const handlePause = () => {
    setIsPlaying(false);
    cancel();
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
      <div className="virtual-tour-container relative h-screen w-full">
        <ReactPhotoSphereViewer
          src={currentImage} // Pass the current image source here
          height="100vh"
          width="100%"
          onRender={() => setIsPlaying(true)}
        />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img
            src="./images/pin-red.png"
            alt="Marker"
            className="cursor-pointer bg-transparent"
            width={20}
            height={50}
            onClick={() => handleMarkerClick('./360/fountain.JPG', 'Moving to the fountain')}
          />
        </div>

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
              <Link href={'/booking'}>
                <id className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
                  Book Now
                </id>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
