'use client';
import { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { FiStar, FiCalendar, FiUser, FiSearch } from 'react-icons/fi';
import { FaRegSmile, FaRegFrown } from 'react-icons/fa';
import Link from 'next/link';

const ReviewPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedSite, setSelectedSite] = useState(null);
  const [rating, setRating] = useState(null);
  const [visitDate, setVisitDate] = useState('');
  const [visitWith, setVisitWith] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [reviewTitle, setReviewTitle] = useState('');
  const [reviews, setReviews] = useState([]);

  const touristSites = [
    { name: 'Kwame Nkrumah Mausoleum', location: 'Accra', image: '/images/kwams.jpg' },
    { name: 'Elmina Castle', location: 'Cape Coast', image: '/images/elmina.jpeg' },
    { name: 'Labadi Beach', location: 'Accra', image: '/images/labadi.jpg' },
    { name: 'Safari Valley', location: 'Adukrom', image: '/images/safari.jpg' }
    // Add more tourist sites here...
  ];

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
    const filteredResults = touristSites.filter((site) =>
      site.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const handleSiteSelect = (site) => {
    setSelectedSite(site);
    setSearchQuery('');
    setSearchResults([]);
  };

  const handleSubmit = () => {
    const newReview = {
      rating,
      visitDate,
      visitWith,
      reviewText,
      reviewTitle,
      site: selectedSite,
    };
    setReviews([...reviews, newReview]);
    setRating(null);
    setVisitDate('');
    setVisitWith('');
    setReviewText('');
    setReviewTitle('');
  };

  return (
    <div>
      <Header />
      <main className="container mx-auto py-12">
        <div className="flex items-center p-20 bg-gray-200">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Write a Review, Make Someone's Trip</h1>
            <p className="text-lg text-gray-700 mb-10">
              Stories like yours are what helps travelers have better trips. Share your experience and help out a fellow traveler!
            </p>
            <div className="search-bar flex justify-center w-full">
              <div className="relative">
                <input
                  type="search"
                  placeholder="What would you like to review?"
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                  className="py-5 px-10 text-lg text-gray-800 rounded-full shadow-md focus:outline-none"
                  style={{ width: '800px' }}
                />
                <button className="absolute right-0 top-0 mt-3 mr-3 py-3 px-6 bg-gradient-to-r from-green-400 to-green-600 text-white font-bold rounded-full shadow-md">
                  Search
                </button>
                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mb-24 mt-24">
          {searchResults.map((site, index) => (
            <div key={index} className="border rounded-lg overflow-hidden p-4 mb-4" onClick={() => handleSiteSelect(site)}>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{site.name}</h2>
              <p className="text-gray-600 mb-1">Location: {site.location}</p>
              <img src={site.image} alt={site.name} className="w-full h-40 rounded-lg mb-4" />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-12">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Reviews</h2>
            {reviews.length === 0 ? (
              <p className="text-gray-700">You have no reviews yet. After you write some reviews, they will appear here.</p>
            ) : (
              reviews.map((review, index) => (
                <div key={index} className="border rounded-lg p-4 mb-4">
                  <h3 className="text-lg font-semibold mb-2">{review.reviewTitle}</h3>
                  <p className="text-yellow-500 mb-2">
                    {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                  </p>
                  <p className="text-gray-600 mb-2">{review.reviewText}</p>
                  <p className="text-gray-500">{review.visitWith} - {review.visitDate}</p>
                  <p className="text-gray-500">Site: {review.site.name}</p>
                </div>
              ))
            )}
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Tell us, how was your visit?</h2>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">{selectedSite ? selectedSite.name : 'Nature Thrills'}</h3>
              <p className="text-gray-600 mb-4">{selectedSite ? `Location: ${selectedSite.location}` : 'By ProTour Africa'}</p>
              <button className="text-blue-500 underline">Not the right one? Change activity</button>
              {selectedSite && (
                <img src={selectedSite.image} alt={selectedSite.name} className="w-full h-40 rounded-lg mb-4" />
              )}
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">How would you rate your experience?</h3>
              <div className="flex justify-center space-x-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <FiStar
                    key={num}
                    className={`text-3xl cursor-pointer ${rating >= num ? 'text-yellow-500' : 'text-gray-300'}`}
                    onClick={() => setRating(num)}
                  />
                ))}
              </div>
              <p className="text-center text-gray-600 mt-2">{rating ? `${rating}.0 of 5 bubbles` : 'Select a rating'}</p>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">When did you go?</h3>
              <div className="relative">
                <FiCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <select
                  value={visitDate}
                  onChange={(e) => setVisitDate(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select one</option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Who did you go with?</h3>
              <div className="grid grid-cols-2 gap-4">
                {['Business', 'Couples', 'Family', 'Friends', 'Solo'].map((option) => (
                  <button
                    key={option}
                    onClick={() => setVisitWith(option)}
                    className={`py-2 px-4 border rounded-lg flex items-center justify-center ${
                      visitWith === option ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {option === 'Business' && <FiUser className="mr-2" />}
                    {option === 'Couples' && <FaRegSmile className="mr-2" />}
                    {option === 'Family' && <FaRegSmile className="mr-2" />}
                    {option === 'Friends' && <FaRegSmile className="mr-2" />}
                    {option === 'Solo' && <FaRegFrown className="mr-2" />}
                    {option}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Write your review</h3>
              <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="The views were amazing. We took so many photos!..."
                className="w-full h-32 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-gray-600 mt-1">{reviewText.length}/100 min characters</p>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Title your review</h3>
              <input
                value={reviewTitle}
                onChange={(e) => setReviewTitle(e.target.value)}
                placeholder="Give us the gist of your experience"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-gray-600 mt-1">{reviewTitle.length}/120 max characters</p>
            </div>
            <div className="text-center">
              <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white py-2 px-6 rounded-lg font-bold shadow-md hover:bg-blue-600"
              >
                Submit review
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReviewPage;
