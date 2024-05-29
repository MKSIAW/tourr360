'use client'
import { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import React from 'react';
import { FiSearch } from 'react-icons/fi';

const ReviewPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const touristSites = [
    { name: 'Kwame Nkrumah Mausoleum', location: 'Accra' },
    { name: 'Elmina Castle', location: 'Cape Coast' },
    { name: 'Labadi Beach', location: 'Accra' },
    // Add more tourist sites here...
  ];

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
    // Filter tourist sites based on search query
    const filteredResults = touristSites.filter((site) =>
      site.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchResults(filteredResults);
  };



  return (
    <div>
      <Header />
      <main className="container mx-auto py-10 ">
      <div className="flex items-center p-6 bg-gray-100 ">
  <div className="text-center mb-12">
    <h1 className="text-3xl font-bold text-gray-900 mb-4">Write a Review, Make Someone's Trip</h1>
    <p className="text-lg text-gray-700 mb-10 "> Stories like yours are what helps travelers have better trips. Share your experience and help out a fellow traveler!</p>
   
    {/* Search bar */}
    <div className="search-bar flex justify-center w-full">
            <div className="relative">
              <input
                type="search"
                placeholder="What would you like to review?"
              
                className="py-5 px-10 text-lg text-gray-800 rounded-full shadow-md focus:outline-none"
                style={{ width: "800px" }} 
              />
              <button className="absolute right-0 top-0 mt-3 mr-3 py-3 px-6 bg-gradient-to-r from-green-400 to-green-600 text-white font-bold rounded-full shadow-md" >
                search
              </button>
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"  /> 
            </div>
          </div>

  </div>
</div>

<div className="max-w-3xl mx-auto mb-24 mt-24">
          {searchResults.map((site, index) => (
            <div key={index} className="border rounded-lg overflow-hidden p-4 mb-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{site.name}</h2>
              <p className="text-gray-600 mb-1">Location: {site.location}</p>
              <Link href={`/review/${site.name.toLowerCase().replace(/\s/g, '')}`}>
                <a className="text-blue-500 hover:underline">Write a Review</a>
              </Link>
            </div>
          ))}
          </div>




<div className="max-w-3xl mx-auto mb-24 mt-24">
  <div className="border rounded-lg overflow-hidden p-4">
    <h2 className="text-xl font-semibold text-gray-900 mb-4">Been Here?</h2>
    <div className="flex items-center">
      <div className="flex flex-grow">
        <div className="mr-8">
          <img src="/images/kwams.jpg" alt="Image 1" className="w-60 h-40 rounded-lg mb-4" />
          <h3 className="text-lg font-semibold">Kwame Nkrumah Mausoleum</h3>
          <p className="text-gray-600 mb-1">Location: Accra</p>
          <div className="flex items-center">
            <p className="text-yellow-500 text-xl">&#9733;&#9733;&#9733;&#9733;&#9734;</p>
            <p className="text-gray-600 ml-2">(4.0)</p>
          </div>
        </div>
        <div className="mr-8">
          <img src="/images/elmina.jpeg" alt="Image 2" className="w-60 h-40 rounded-lg mb-4" />
          <h3 className="text-lg font-semibold">Elmina Castle</h3>
          <p className="text-gray-600 mb-1">Location: Cape Coast</p>
          <div className="flex items-center">
            <p className="text-yellow-500 text-xl">&#9733;&#9733;&#9733;&#9733;&#9734;</p>
            <p className="text-gray-600 ml-2">(4.0)</p>
          </div>
        </div>
        <div>
          <img src="/images/jazz.jpg" alt="Image 3" className="w-60 h-40 rounded-lg mb-4" />
          <h3 className="text-lg font-semibold">Labadi Beach</h3>
          <p className="text-gray-600 mb-1">Location: Accra</p>
          <div className="flex items-center">
            <p className="text-yellow-500 text-xl">&#9733;&#9733;&#9733;&#9733;&#9734;</p>
            <p className="text-gray-600 ml-2">(4.0)</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



<div className="grid grid-cols-2 gap-12">
  <div className="bg-gray-100 p-6 rounded-lg">
    <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Reviews</h2>
    <p className="text text-gray-700">You have no reviews yet. After you write some reviews, they will appear here.</p>
  </div>

  <div className="bg-gray-100 p-6 rounded-lg flex items-center justify-center relative">
  <div className="absolute inset-0 w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: `url("/images/reviw.avif")` }}>
    <div className="text-white text-center">
      <h2 className="text-xl font-semibold mb-4">Why Review?</h2>
      <p className="text-lg mb-4">See how your reviews help millions of travelers.</p>
      <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">Learn More</button>
    </div>
  </div>
</div>


</div>

        
      </main>
      <Footer />
    </div>
  );
}

export default ReviewPage;
