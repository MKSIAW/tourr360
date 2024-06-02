'use client'
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import Link from 'next/link';
import axios from 'axios';

const HotelListPage = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    // Fetch hotel data from WordPress API endpoint with JWT authentication
    const fetchHotels = async () => {
      try {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJtaWNoZWxsZSIsImlhdCI6MTcxNDQ4ODQ1NywiZXhwIjoxODcyMTY4NDU3fQ.cg9eGdXaeKaKQiBtLscqfl7wUTq_BXUite33psQPjxk";
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const response = await axios.get('http://localhost/wordpress/wp-json/wp/v2/hotel?acf_format=standard&_fields=id,title,acf', { headers });
        setHotels(response.data);
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
        <h1 className="text-4xl font-bold text-center mb-10">Top - World</h1>
        <div className="mb-8 text-center">
          <p className="mb-4 text-lg text-gray-800 leading-relaxed">When you think of a hotel that checks all the boxes (outstanding service, comfy rooms, the works) it’s probably one of these winning spots.</p>
        </div>
        <ol className="list-decimal pl-0">
          {hotels.map((hotel, index) => (
            <li key={index} className="mb-6">
              <Link href={`/hotel/${hotel.id}`} passHref>
                <id>
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
                </id>
              </Link>
            </li>
          ))}
        </ol>
      </div>
      <Footer />
    </div>
  );
};

export default HotelListPage;
