'use client'
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';

const HotelListPage = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    // Fetch hotel data from WordPress API endpoint
    const fetchHotels = async () => {
      try {
        const response = await fetch('http://localhost/wordpress/wp-json/wp/v2/hotel?acf_format=standard&_fields=id,title,acf');
        if (response.ok) {
          const data = await response.json();
          setHotels(data);
        } else {
          console.error('Failed to fetch hotel data');
        }
      } catch (error) {
        console.error('Error fetching hotel data:', error);
      }
    };

    fetchHotels();
  }, []);

  return (
    <div>
      <Head>
        <title>Top - World | Hotel List - Tour360</title>
        <meta name="description" content="Explore a list of top hotels with Tour360" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="container mx-auto py-8 max-w-screen-xl">
        <h1 className="text-3xl font-bold mb-10">Top - World</h1>
        <div className="mb-8">
          <p className="mb-4 text-1xl text-gray-600">When you think of a hotel that checks all the boxes (outstanding service, comfy rooms, the works) it’s probably one of these winning spots.</p>
          <p className="mb-6 text-1xl text-gray-600">The Travelers’ Choice Awards Best of the Best title celebrates the highest level of excellence in travel. It’s awarded to those who receive a high volume of above-and-beyond reviews and opinions from the Tour360 community over a 12-month period. Out of our 8 million listings, fewer than 1% achieve this milestone.</p>
        </div>
        <ol className="list-decimal pl-0">
          {hotels.map((hotel, index) => (
            <li key={index} className="mb-6">
              <div className="border border-gray-200 p-4 rounded-md flex">
                <div className="w-1/4 h-auto mr-4">
                  <img src={hotel.acf.image} alt={hotel.title.rendered} className="max-w-full rounded-md" style={{ height: 'auto', width: '100%' }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{index + 1}. {hotel.acf.name}</h3>
                  <p className="text-gray-700 mb-2"><span className="font-bold">Location:</span> {hotel.acf.location}</p>
                  <p className="text-gray-700 mb-2"><span className="font-bold">Description:</span> {hotel.acf.description}</p>
                  <p className="text-gray-700 mb-2"><span className="font-bold">Rating:</span> {hotel.acf.rating}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <Footer />
    </div>
  );
};

export default HotelListPage;
