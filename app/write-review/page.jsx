'use client'

import Header from '../components/header';
import Footer from '../components/footer';
import React from 'react';

const ReviewPage = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto py-8">
      <div className="flex items-center p-6 bg-gray-100">
  <div className="text-center mb-12">
    <h1 className="text-3xl font-bold text-gray-900 mb-4">Write a Review, Make Someone's Trip</h1>
    <p className="text-lg text-gray-700">Stories like yours are what helps travelers have better trips. Share your experience and help out a fellow traveler!</p>
    {/* Search bar */}
    <div className="flex justify-center items-center mt-8">
      <input
        type="text"
        placeholder="What would you like to review?"
        className="border border-gray-400 px-4 py-2 rounded-l-md w-96 focus:outline-none"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a4 4 0 11-8 0 4 4 0 018 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 21v-2m0 0V9m0 12H7a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v14a2 2 0 01-2 2z" />
        </svg>
      </button>
    </div>
  </div>
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
