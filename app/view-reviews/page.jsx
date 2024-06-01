'use client';
import { useState } from 'react';
import { FiStar, FiCalendar, FiUser } from 'react-icons/fi';
import { FaRegSmile, FaRegFrown } from 'react-icons/fa';
import Header from '../components/header';
import Footer from '../components/footer';

const ReviewPage = () => {
  const [rating, setRating] = useState(null);
  const [visitDate, setVisitDate] = useState('');
  const [visitWith, setVisitWith] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [reviewTitle, setReviewTitle] = useState('');

  const handleSubmit = () => {
    // Handle submit logic
    console.log({
      rating,
      visitDate,
      visitWith,
      reviewText,
      reviewTitle,
    });
  };

  return (
    <div>
      <Header />
      <main className="container mx-auto py-10 px-4">
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-center mb-8">Tell us, how was your visit?</h1>
          <img src="/images/elmina3.jpg" alt="elmina" />
          <div className="text-center mb-10">
            <h2 className="text-2xl font-semibold mb-2">Elmina Castle</h2>
            <p className="text-gray-600 mb-4">By Tour360</p>
            <button className="text-blue-500 underline">Not the right one? Change activity</button>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">How would you rate your experience?</h3>
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
            <h3 className="text-xl font-semibold mb-2">When did you go?</h3>
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
            <h3 className="text-xl font-semibold mb-2">Who did you go with?</h3>
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
            <h3 className="text-xl font-semibold mb-2">Write your review</h3>
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="The views were amazing. We took so many photos!..."
              className="w-full h-32 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-gray-600 mt-1">{reviewText.length}/100 min characters</p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Title your review</h3>
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
      </main>
      <Footer />
    </div>
  );
};

export default ReviewPage;
