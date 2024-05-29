'use client'
import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import { FiSearch } from 'react-icons/fi';

const CustomizeTripPage = () => {
  const [tripName, setTripName] = useState('');
  const [destination, setDestination] = useState('');
  const [stayOption, setStayOption] = useState('dates'); // 'dates' or 'days'
  const [dates, setDates] = useState('');
  const [days, setDays] = useState('');

  const handleCreateTrip = () => {
    // Handle trip creation logic here
    console.log('Trip Created:', { tripName, destination, stayOption, dates, days });
  };

  const handleCancel = () => {
    // Handle cancel logic here
    setTripName('');
    setDestination('');
    setStayOption('dates');
    setDates('');
    setDays('');
  };

  return (
    <div>
      <Head>
        <title>Customize Trip - Tour360</title>
        <meta name="description" content="Create your customized trip with Tour360" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container mx-auto py-10 px-4">
        <div className="border rounded-lg p-8 bg-white shadow-md max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Create a Trip</h1>
          
          <div className="mb-6">
            <label htmlFor="tripName" className="block text-lg font-medium text-gray-700 mb-2">
              Trip Name
            </label>
            <input
              type="text"
              id="tripName"
              value={tripName}
              onChange={(e) => setTripName(e.target.value)}
              className="w-full p-3 border rounded-lg"
              placeholder="Enter your trip name"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="destination" className="block text-lg font-medium text-gray-700 mb-2">
              Destination
            </label>
            <div className="relative">
              <input
                type="text"
                id="destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full p-3 border rounded-lg"
                placeholder="Search for a destination"
              />
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700 mb-2">Length of Stay</label>
            <div className="flex space-x-4 mb-4">
              <button
                onClick={() => setStayOption('dates')}
                className={`px-4 py-2 rounded-lg ${stayOption === 'dates' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                Dates
              </button>
              <button
                onClick={() => setStayOption('days')}
                className={`px-4 py-2 rounded-lg ${stayOption === 'days' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                Number of Days
              </button>
            </div>

            {stayOption === 'dates' && (
              <input
                type="text"
                value={dates}
                onChange={(e) => setDates(e.target.value)}
                className="w-full p-3 border rounded-lg"
                placeholder="Enter dates (e.g., June 1 - June 7)"
              />
            )}
            {stayOption === 'days' && (
              <input
                type="number"
                value={days}
                onChange={(e) => setDays(e.target.value)}
                className="w-full p-3 border rounded-lg"
                placeholder="Enter number of days"
              />
            )}
          </div>

          <div className="flex justify-end space-x-4">
            <button
              onClick={handleCreateTrip}
              className="px-6 py-3 bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-green-600"
            >
              Create Trip
            </button>
            <button
              onClick={handleCancel}
              className="px-6 py-3 bg-gray-300 text-gray-700 font-bold rounded-lg shadow-md hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CustomizeTripPage;
