'use client'
import { useState } from 'react';
import Head from 'next/head';
//import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const WriteReview = () => {
  // State variables for form inputs
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [rating, setRating] = useState(0); // Initialize rating state with 0

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission (e.g., send data to backend)
    console.log('Review submitted:', { title, content, rating });
    // Reset form inputs
    setTitle('');
    setContent('');
    setRating(0);
  };

  // Function to handle star rating click
  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  // Function to render star icons based on rating
  const renderStarIcons = () => {
    const stars = [];
    const roundedRating = Math.round(rating * 2) / 2; // Round rating to nearest half star
    for (let i = 1; i <= 5; i++) {
      if (roundedRating >= i) {
        stars.push(
          <FaStar
            key={i}
            onClick={() => handleStarClick(i)}
            className="text-yellow-500 cursor-pointer mr-1 md:mr-2 text-2xl md:text-3xl"
          />
        );
      } else if (roundedRating + 0.5 === i) {
        stars.push(
          <FaStarHalfAlt
            key={i}
            onClick={() => handleStarClick(i)}
            className="text-yellow-500 cursor-pointer mr-1 md:mr-2 text-2xl md:text-3xl"
          />
        );
      } else {
        stars.push(
          <FaStar
            key={i}
            onClick={() => handleStarClick(i)}
            className="text-gray-400 cursor-pointer mr-1 md:mr-2 text-2xl md:text-3xl"
          />
        );
      }
    }
    return stars;
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto mt-8">
        <Head>
          <title>Write a Review</title>
          <meta name="description" content="Write a review for Tour360" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="max-w-lg mx-auto">
          <h1 className="text-3xl font-bold mb-6">Write a Review</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="title" className="block font-medium">Title:</label>
              <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="content" className="block font-medium">Content:</label>
              <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} rows="6" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"></textarea>
            </div>
            <div className="flex items-center">
              <label htmlFor="rating" className="block font-medium mr-4">Rating:</label>
              <div className="flex items-center">
                {renderStarIcons()}
              </div>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit Review</button>
          </form>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default WriteReview;