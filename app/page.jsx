'use client'
import { useState } from 'react';
import Head from 'next/head';
import Header from './components/header';
import Footer from './components/footer';
import { FiSearch, FiHome, FiCoffee, FiList } from 'react-icons/fi';
import { FaAirbnb } from 'react-icons/fa';
import Link from 'next/link';

const Welcome = ({ user }) => {

  const [searchQuery, setSearchQuery] = useState("Search for places to go, things to do, hotels...");
  const [whereToText, setWhereToText] = useState("Where to?");
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleLinkClick = (text, placeholder) => {
    setWhereToText(text);
    setSearchQuery(placeholder);
  };

  const data = [
    { name: "Elmina Castle", rating: 4.5 },
    { name: "Polo Beach House", rating: 4.2 },
    { name: "Safari Valley", rating: 4.7 },
    { name: "Slave Market", rating: 4.9 },
  ];
  

  const handleSearch = () => {
    const filteredData = data.filter((item) => {
      return item.name.toLowerCase().includes(inputValue.toLowerCase());
    });
    setSearchResults(filteredData);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value.trim());
  };


  return (
    <div>
      <Head>
        <title>Welcome to Tour360</title>
        <meta name="description" content="Welcome to Tour360 - Your ultimate tour guide!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header  />
      <div className="welcome-container text-center text-gray-800 mt-8">
        <main>
          <h2 className="text-4xl font-bold mb-16">{whereToText}</h2>
          <div className="flex justify-center space-x-8 mb-10">

            
              <div className="text-2xl hover:text-black-500 hover:underline transition duration-300 ease-in-out flex items-center" onClick={() => handleLinkClick("Do something fun", "Attraction, activity or destination")}>
                <FiList className="h-6 w-6 mr-2" />
                Things to do
              </div>
          

              <div className="text-2xl hover:text-black-500 hover:underline transition duration-300 ease-in-out flex items-center" onClick={() => handleLinkClick("Stay somewhere great", "Hotel name")}>
                <FaAirbnb className="h-6 w-6 mr-2" />
                Hotels
              </div>
         
  <div className="text-2xl hover:text-black-500 hover:underline transition duration-300 ease-in-out flex items-center" onClick={() => handleLinkClick("Find places to eat", "Restaurant")}>
                
    <FiCoffee className="h-6 w-6 mr-2" />
    Restaurants
  </div>

  <div className="text-2xl hover:text-black-500 hover:underline transition duration-300 ease-in-out flex items-center" onClick={() => handleLinkClick("Explore places to rent", "Destination")}>
             
    <FiHome className="h-6 w-6 mr-2" />
    Vacation Rentals
  </div>

            </div>
    {/* Search bar */}
    <div className="search-bar flex justify-center w-full">
            <div className="relative">
              <input
                type="search"
                placeholder={searchQuery}
                value={inputValue}
                onChange={handleInputChange}
                className="py-5 px-10 text-lg text-gray-800 rounded-full shadow-md focus:outline-none"
                style={{ width: "800px" }} 
              />
              <button className="absolute right-0 top-0 mt-3 mr-3 py-3 px-6 bg-gradient-to-r from-green-400 to-green-600 text-white font-bold rounded-full shadow-md" onClick={handleSearch}>
                Search
              </button>
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"  /> 
            </div>
          </div>

<div className="placeholder-container text-center mt-20">
  <div className="placeholder bg-gray-0 p-4 w-250 mx-40 relative rounded-xl">
    <img src="/images/choice.avif" alt="Hotels" className="w-full rounded-lg mb-4" />
    <div className="absolute bottom-10 left-10 w-full text-left">
      <h2 className="text-3xl font-bold text-white font-arial mb-1">Ghana's Best Hotels for 2024</h2>
      <p className="text-1xl text-white font-arial mb-4">See our Tourist Choice Awards Best of the Best Winners</p>
      <Link href="/hotels"> 
                <id className="bg-white hover:bg-gray-100 text-black font-bold py-2 px-4 rounded-3xl font-arial text-xl">
                  Explore the List
                </id>
              </Link>
    </div>
  </div>
</div>


<div className="text-left mt-20">
  <h2 className="text-3xl font-bold mb-4">Ways to Tour Accra</h2>
  <p className="text-lg mb-8">Book these experiences for a close-up look at Accra</p>
  <div className="flex gap-8">

   
    <div className="block transition duration-300 ease-in-out">
      <div className="placeholder bg-gray-0 p-2 rounded-lg ">
        <img src="/images/elmina.jpg" alt="Placeholder 1" className="w-72 h-72 rounded-lg mb-4" />
        <h3 className="text-xl font-semibold mb-2">Elmina Castle</h3>
        <p className="text-gray-700 mb-2">Rating: 4.5</p>
        <p className="text-gray-700">Price Range: GHS 50 - 100</p>
      </div>
    </div>

   
    <div className="block transition duration-300 ease-in-out">
      <div className="placeholder bg-gray-0 p-2 rounded-lg ">
        <img src="/images/polo.jpg" alt="Placeholder 2" className="w-72 h-72 rounded-lg mb-4" />
        <h3 className="text-xl font-semibold mb-2">Polo Beach House</h3>
        <p className="text-gray-700 mb-2">Rating: 4.2</p>
        <p className="text-gray-700">Price Range: GHS 30 - 80</p>
      </div>
    </div>


    <div className="block transition duration-300 ease-in-out">
      <div className="placeholder bg-gray-0 p-2 rounded-lg ">
        <img src="/images/safari.avif" alt="Placeholder 3" className="w-72 h-72 rounded-lg mb-4" />
        <h3 className="text-xl font-semibold mb-2">Safari Valley</h3>
        <p className="text-gray-700 mb-2">Rating: 4.7</p>
        <p className="text-gray-700">Price Range: GHS 100 - 300</p>
      </div>
    </div>


    <div className="block transition duration-300 ease-in-out">
      <div className="placeholder bg-gray-0 p-2 rounded-lg ">
        <img src="/images/slave.jpg" alt="Placeholder 4" className="w-72 h-72 rounded-lg mb-4" />
        <h3 className="text-xl font-semibold mb-2">Slave Market</h3>
        <p className="text-gray-700 mb-2">Rating: 4.9</p>
        <p className="text-gray-700">Price Range: GHS 80 - 200</p>
      </div>
    </div>
  </div>
</div>

<div className="text-center mt-20">
  <div className="max-w-6xl mx-auto border rounded-lg overflow-hidden">
    <div className="flex items-center p-6 bg-gray-100">
    
      <img src="/images/plan.jpg" alt="Placeholder 5" className="w-60 h-40 rounded-lg mr-8" />
      <div>
        <h2 className="text-3xl font-bold mb-4 font-arial">Keep on Planning</h2>
        <p className="text-lg mb-4 font-arial">What to do, where to eat & more trip inspo</p>
      </div>

      <div className="flex-grow"></div>
      <Link href="/articles">
      <button className="bg-beige text-black font-bold py-3 px-6 rounded-md shadow-md">
        See More
      </button>
      </Link>
    </div>
  </div>
</div>
        </main>
      </div>
      <Footer/>
    </div>
  );
}

export default Welcome;