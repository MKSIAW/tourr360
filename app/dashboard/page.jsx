'use client'
import Link from 'next/link';
import Head from 'next/head';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import LocationFilter from '../components/locationFilter';
import CategoryFilter from '../components/categoryFilter';
import PriceRangeFilter from '../components/priceFilter';

const Dashboard = () => {
  const [touristSites, setTouristSites] = useState([]);

  useEffect(() => {
    const fetchTouristSites = async () => {
      try {
        const response = await axios.get('http://localhost/wordpress/wp-json/wp/v2/tour-site?acf_format=standard&_fields=id,title,acf');
        setTouristSites(response.data.map(site => ({
          id: site.id,
          name: site.title.rendered,
          image: site.acf.image,
          location: site.acf.location,
        })));
      } catch (error) {
        console.error('Error fetching tourist sites:', error);
      }
    };

    fetchTouristSites();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Dashboard - Tour360</title>
        <meta name="description" content="Dashboard for Tour360 - Your ultimate tour guide!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* Filters Section */}
      <div className="flex bg-white p-4 space-x-4">
        <LocationFilter />
        <CategoryFilter />
        <PriceRangeFilter />
        {/* Add other filter components here */}
      </div>

      {/* Main Content */}
      <main className="flex-grow p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {touristSites.map(site => (
            <Link key={site.id} href={`/VirtualTour/${site.id}`}>
              <div className=" rounded-lg overflow-hidden hover:shadow-lg transition duration-300 ease-in-out">
                <img src={site.image} alt={site.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{site.name}</h3>
                  <p className="text-sm">{site.location}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Dashboard;