import React from 'react';
import { FaStar } from 'react-icons/fa';
import Header from '../components/header';
import Footer from '../components/footer';

const Beaches = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Elmina Castle, Polo Beach House, Safari Valley, Slave Market Experience</h1>
        <div className="flex items-center mb-4">
          <FaStar className="text-yellow-500 mr-2" />
          <span>5 reviews</span>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <img src="/images/Elmina.jpg" alt="Image 1" className="rounded-lg" />
          <img src="/images/safari.avif" alt="Image 2" className="rounded-lg" />
          <img src="/images/polo.jpg" alt="Image 2" className="rounded-lg" />
          <img src="/images/salaga.jpg" alt="Image 2" className="rounded-lg" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-8">
          <div>
            <h2 className="text-xl font-bold mb-2">About</h2>
            <p className="mb-4">Our Tours as always gives you more, our well-traveled Tour Guides will make your adventures in Ghana....You will have a professional driver and a guide who is very knowledgeable and fun to be with. All your requests while on the tour will be answered...</p>
          </div>
          <div className="border border-gray-300 rounded-lg  p-4">
            <h2 className="text-xl font-bold mb-2">Reserve Your Spot</h2>
            <p>Mon, May 27</p>
            <p>2 options available for 5/27</p>
            <p>Boti Falls, Botanic Gardens, Cocoa Fam, Umbrella Rock Experience</p>
            <p>Pickup included</p>
            <p>2 Adults x $175.00</p>
            <p>Total $350.00</p>
            <p>(No additional taxes or booking fees)</p>
            <p>10:00 AM</p>
            <p>6:00 AM</p>
            <p>7:00 AM</p>
            <p>See 4 More Times</p>
            <button className="bg-yellow-500 text-white font-bold py-4 px-10 rounded-full mt-6">
              Reserve Now
            </button>
            <p className="text-xs mt-2">Not sure? You can cancel this reservation up to 24 hours in advance for a full refund.</p>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">What's Included</h2>
          <ul className="list-disc list-inside">
            <li>Transportation</li>
            <li>Admission fees</li>
            {/* Add more items */}
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Departure and Return</h2>
          <p>Departure: Accra Mall</p>
          <p>Return: Accra Mall</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Accessibility</h2>
          <p>Wheelchair accessible</p>
        </div>
        {/* Add more sections as needed */}
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Similar experiences</h2>
          {/* Add similar experiences section */}
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Itinerary</h2>
          {/* Add itinerary section */}
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">About the operator</h2>
          {/* Add about the operator section */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Beaches;
