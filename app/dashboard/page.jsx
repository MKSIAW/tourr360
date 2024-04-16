'use client'
import Link from 'next/link';
import Head from 'next/head';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Dashboard = () => {
  const [touristSites, setTouristSites] = useState([]);

  useEffect(() => {
    const fetchTouristSites = async () => {
      try {
        
        const response = await axios.get('http://localhost/wordpress/wp-json/wp/v2/tour-site?acf_format=standard&_fields=id,title,acf');
        setTouristSites(response.data.map(site => ({
          id: site.id,
          name: site.title.rendered,
          image: site.acf.image, // Ensure your WordPress site exposes this field. site.acf....
          location: site.acf.location, // Assuming you use ACF to add custom fields
         
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

      {/* Navbar */}
      <header className="bg-blue-600 text-white p-2 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-semibold">Tour360</span>
          <img src="/images/dobiison-virtual-tour-logo.webp" alt="Profile Icon" className="h-12 w-12" />
        </div>

        <div className="flex items-center space-x-2">
          <input type="text" placeholder="Search..." className="p-1 rounded-none bg-white border-none" />

          <Link href="/signin" className="bg-blue-600 text-white rounded-full py-2 px-4 hover:bg-blue-800">Sign In</Link>

          <Link href="/settings" className="text-white">Settings</Link>
          <Link href="/cart" className="text-white">Cart</Link>
          <Link href="/profile" className="text-white">Profile</Link>
        </div>
      </header>

        {/* Main Content */}
        <main className="flex-grow p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {touristSites.map(site => (
            <Link key={site.id} href={`/VirtualTour/${site.id}`}>
              <id className="border border-gray-300 p-2 text-center">
                {/* Image */}
                <img src={site.image} alt={site.name} className="w-full h-40 object-cover" />
                {/* Name */}
                <h3 className="font-semibold text-lg">{site.name}</h3>
                {/* Location */}
                <div>{site.location}</div>
              </id>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white p-5 text-center">
        <div className="mb-2 space-x-4">
          <Link href="/about" className="text-white">About Us</Link>
          <Link href="/contact" className="text-white">Contact Us</Link>
          <a href="#" className="text-white">Social Media</a>
        </div>

        <div className="text-sm">
          <p>&copy; {new Date().getFullYear()} Tour360. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Dashboard;
