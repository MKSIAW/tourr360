'use client'

import Head from 'next/head';
import axios from 'axios';
import { useEffect, useState } from 'react';

const BookingPage = () => {
  const [bookingData, setBookingData] = useState(null);
  const bookingId = 83; // Replace with the ID of the specific booking post you want to fetch

  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        const response = await axios.get(`http://localhost/wordpress/wp-json/wp/v2/posts/${bookingId}`);
        setBookingData(response.data);
      } catch (error) {
        console.error('Error fetching booking data:', error);
      }
    };

    fetchBookingData();
  }, []);

  // Define the mybooking_submit function
  const mybooking_submit = () => {
    // Implementation of the booking submit functionality
    console.log('Booking submitted');
  };

  return (
    <div className="container mx-auto py-8">
      <Head>
        <title>Booking Page</title>
        <meta name="description" content="Booking page description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-blue-600">Booking Page</h1>
        {bookingData && (
          <div className="bg-gray-100 p-4 rounded-lg">
            {/* Display booking data here */}
            <h2 className="text-xl font-semibold mb-2 text-blue-600">{bookingData.title.rendered}</h2>
            <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: bookingData.content.rendered }} />
          </div>
        )}
      </main>

      <footer className="mt-8 text-center text-gray-500">
        {/* Footer content */}
        &copy; {new Date().getFullYear()} Your Website
      </footer>
    </div>
  );
};

export default BookingPage;
