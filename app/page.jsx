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
    { name: "Elmina Castle" },
    { name: "Polo Beach House" },
    { name: "Safari Valley" },
    { name: "Slave Market" },
    { name: "Boti Falls" },
    { name: "Kwame Nkrumah Mausoleum" },

  ];

  const handleSearch = () => {
    const filteredData = data.filter((item) => {
      return item.name.toLowerCase().includes(inputValue.toLowerCase());
    });
    setSearchResults(filteredData);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    handleSearch(); // Trigger search on input change
  };

  return (
    <div className="welcome-container zoom-out">
      <Head>
        <title>Welcome to Tour360</title>
        <meta name="description" content="Welcome to Tour360 - Your ultimate tour guide!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="text-center text-gray-800 mt-8">
        <main>
          <h2 className="text-4xl font-bold mb-16">{whereToText}</h2>
          <div className="flex justify-center space-x-8 mb-10">
            <div
              className="text-2xl hover:text-black-500 hover:underline transition duration-300 ease-in-out flex items-center"
              onClick={() => handleLinkClick("Do something fun", "Attraction, activity or destination")}
            >
              <FiList className="h-6 w-6 mr-2" />
              Things to do
            </div>
            <div
              className="text-2xl hover:text-black-500 hover:underline transition duration-300 ease-in-out flex items-center"
              onClick={() => handleLinkClick("Stay somewhere great", "Hotel name")}
            >
              <FaAirbnb className="h-6 w-6 mr-2" />
              Hotels
            </div>
            <div
              className="text-2xl hover:text-black-500 hover:underline transition duration-300 ease-in-out flex items-center"
              onClick={() => handleLinkClick("Find places to eat", "Restaurant")}
            >
              <FiCoffee className="h-6 w-6 mr-2" />
              Restaurants
            </div>
            <div
              className="text-2xl hover:text-black-500 hover:underline transition duration-300 ease-in-out flex items-center"
              onClick={() => handleLinkClick("Explore places to rent", "Destination")}
            >
              <FiHome className="h-6 w-6 mr-2" />
              Vacation Rentals
            </div>
          </div>
          {/* Search bar */}
          <div className="search-bar flex justify-center w-full relative">
            <div className="relative">
              <input
                type="search"
                placeholder={searchQuery}
                value={inputValue}
                onChange={handleInputChange}
                className="py-5 px-10 text-lg text-gray-800 rounded-full shadow-md focus:outline-none"
                style={{ width: "800px" }}
              />
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              {searchResults.length > 0 && (
                <div className="absolute left-0 right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                  <ul className="max-h-60 overflow-y-auto">
                    {searchResults.map((result, index) => (
                      <li key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <Link href={`/${result.name.replace(/\s/g, '')}`} passHref>
                          <id onClick={() => setSearchResults([])}>
                            {result.name}
                          </id>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

 

          <div className="placeholder-container text-center ">
            <div className="placeholder bg-gray-0 p-4 w-350 mx-auto relative rounded-xl"><div className="explore-section bg-gray py-8">
          <div className="container mx-auto flex flex-col sm:flex-row items-center">
            
            <div className="w-full sm:w-2/3 mb-4 sm:mb-0">
              <Link href="/foodanddrink">
              <img src="/images/food.jpg" alt="Food Placeholder 1" className="w-full h-[40rem] rounded-lg mb-0" />
              </Link>
            </div>
            <div className="w-full sm:w-1/3 flex flex-col justify-between sm:ml-4">
              <div className="w-full mb-4">
              <Link href="/foodanddrink">
                <img src="/images/drink.avif" alt="Food Placeholder 2" className="w-full rounded-lg mb-4" />
                </Link>
              </div>
              <div className="w-full">
              <Link href="/foodanddrink">
                <img src="/images/restaurant.webp" alt="Food Placeholder 3" className="w-full rounded-lg" />
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
           
          </div>
        </div>
              
            </div>
          </div>

          <div className="explore-section py-8">
          <div className="container mx-auto">
            <div className="text-center mt-4 font-arial">
            <h2 className="text-4xl font-semibold mb-4">Ways to Tour Accra</h2>
            <p className="text-3xl-gray-600 mb-8 ">Book these experiences for a close-up look at Accra</p>
          </div>

          <div class="flex items-center justify-center -mx-8">
  <div class="w-full sm:w-1/2 mb-2 sm:mb-0 px-2">
    <Link href="/experience">
    <img src="/images/slave3.jpg" alt="Visit Placeholder 1" class="w-full rounded-lg h-96" />
    </Link>
  </div>

  <div class="w-full sm:w-1/2 flex flex-col justify-between px-2">
    <div class="w-full mb-2">
    <Link href="/PoloBeachHouse">
      <img src="/images/polo.jpg" alt="Visit Placeholder 2" class="w-full rounded-lg h-72" />
      </Link>
    </div>
    <div class="w-full">
    <Link href="/ElminaCastle">
      <img src="/images/elmina.jpg" alt="Visit Placeholder 3" class="w-full rounded-lg h-72" />
      </Link>
    </div>
  </div>

  <div class="w-full sm:w-1/2 mb-2 sm:mb-0 px-2">
  <Link href="/SafariValley">
    <img src="/images/safari.avif" alt="Visit Placeholder 4" class="w-full rounded-lg h-96" />
    </Link>
  </div>

  <div class="w-full sm:w-1/2 flex flex-col justify-between px-2">
    <div class="w-full mb-2">
    <Link href="/KwameNkrumahMausoleum">
      <img src="/images/kwams.jpg" alt="Visit Placeholder 5" class="w-full rounded-lg h-72" />
      </Link>
    </div>
    <div class="w-full">
    <Link href="/BotiFalls">
      <img src="/images/lake.jpg" alt="Visit Placeholder 6" class="w-full rounded-lg h-72" />
      </Link>
    </div>
  </div>

  <div class="w-full sm:w-1/2 mb-2 sm:mb-0 px-2">
  <Link href="/movenpick">
    <img src="/images/kempinski.jpg" alt="Visit Placeholder 7" class="w-full rounded-lg h-96" />
    </Link>
  </div>

  <div class="w-full sm:w-1/2 flex flex-col justify-between px-2">
    <div class="boti">
    <Link href="/BotiFalls">
      <img src="/images/kintampo.jpg" alt="Visit Placeholder 8" class="w-full rounded-lg h-72" />
      </Link>
    </div>
    <div class="w-full">
    <Link href="/movenpick">
      <img src="/images/choice.jpg" alt="Visit Placeholder 9" class="w-full rounded-lg h-72" />
      </Link>
    </div>
  </div>
</div>
   <div className="text-center mt-4">
             
            </div>
          </div>
        </div>

          <div className="text-center mt-20">
            <div className="max-w-6xl mx-auto border rounded-lg overflow-hidden">
              <div className="flex items-center p-6 bg-gray-100">
                <img src="/images/plan.jpg" alt="Placeholder 5" className="w-60 h-40 rounded-lg mr-8" />
                <div>
                  <h2 className="text-3xl font-bold mb-4 font-arial">Keep on Planning</h2>
                  <p className="text-lg mb-4 font-arial">What to do, where to eat & more trip inspiration</p>
                </div>
                <div className="flex-grow"></div>
                <Link href="/articles">
                  <button className="bg-beige text-black font-bold py-3 px-6 rounded-md shadow-md">See More</button>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Welcome;
