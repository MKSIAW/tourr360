'use client'
import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import { FiSearch } from 'react-icons/fi';
import Link from 'next/link';

const CustomizeTripPage = () => {
  const touristSites = [
    { id: 1, name: 'Boti Falls' },
    { id: 2, name: 'Elmina Castle' },
    { id: 3, name: 'Safari Valley Resort' },
    // Add more tourist sites as needed
  ];


  const [tripName, setTripName] = useState('');
  const [destination, setDestination] = useState('');
  const [stayOption, setStayOption] = useState('dates'); // 'dates' or 'days'
  const [dates, setDates] = useState('');
  const [days, setDays] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSite, setSelectedSite] = useState(null);
  const [searchResults, setSearchResults] = useState([]);


  const handleCreateTrip = () => {
    // Handle trip creation logic here
    console.log('Trip Created:', { tripName, destination, stayOption, dates, days });
    setShowPopup(true); // Show the popup when trip is created
  };

  const handleCancel = () => {
    // Handle cancel logic here
    setTripName('');
    setDestination('');
    setStayOption('dates');
    setDates('');
    setDays('');
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    const results = touristSites.filter(site =>
      site.name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleSelectSite = (site) => {
    setSelectedSite(site);
    setDestination(site.name);
    setSearchTerm('');
    setSearchResults([]);
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
                onFocus={() => setSearchResults(touristSites)}
                onBlur={() => setTimeout(() => setSearchResults([]), 200)}
                onChange={handleSearch}/>
              {searchResults.length > 0 && (
                <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-b-lg shadow-md">
                  {searchResults.map(site => (
                    <li key={site.id} className="cursor-pointer py-2 px-4 hover:bg-gray-100" onClick={() => handleSelectSite(site)}>
                      {site.name}
                    </li>
                  ))}
                </ul>
              )}
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

            {showPopup && (
            <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <p className="text-2xl font-bold mb-4">Trip Created!</p>
                <Link href="/booking"> 
                <id className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold inline-block">Book Now</id>
              </Link>
              </div>
            </div>
          )}
        </div>
        
        </div>
      
      </main>
          

      <Footer />
    </div>
  );
};

export default CustomizeTripPage;
