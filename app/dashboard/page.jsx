'use client'
import Link from 'next/link';
import Head from 'next/head';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

// Filter Components
const LocationFilter = ({ onFilterChange }) => {
  const locations = ['Accra', 'Cape Coast', 'Kumasi', 'Tamale']; // Example locations

  return (
    <select
      onChange={(e) => onFilterChange(e.target.value, 'location')}
      className="p-2 rounded"
    >
      <option value="">All Locations</option>
      {locations.map((location, index) => (
        <option key={index} value={location}>
          {location}
        </option>
      ))}
    </select>
  );
};

const CategoryFilter = ({ onFilterChange }) => {
  const categories = ['Historical', 'Beach', 'Museum', 'Park', 'school', 'hotel']; // Example categories

  return (
    <select
      onChange={(e) => onFilterChange(e.target.value, 'category')}
      className="p-2 rounded"
    >
      <option value="">All Categories</option>
      {categories.map((category, index) => (
        <option key={index} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

const PriceRangeFilter = ({ onFilterChange }) => {
  const priceRanges = [
    { label: 'All Prices', value: '' },
    { label: 'Under GHS 50', value: '0-50' },
    { label: 'GHS 50 - GHS 100', value: '50-100' },
    { label: 'GHS 100 - GHS 200', value: '100-200' },
    { label: 'Above GHS 200', value: '200-' },
  ];

  return (
    <select
      onChange={(e) => onFilterChange(e.target.value, 'priceRange')}
      className="p-2 rounded"
    >
      {priceRanges.map((priceRange, index) => (
        <option key={index} value={priceRange.value}>
          {priceRange.label}
        </option>
      ))}
    </select>
  );
};

const Dashboard = () => {
  const [touristSites, setTouristSites] = useState([]);
  const [filteredSites, setFilteredSites] = useState([]);
  const [filters, setFilters] = useState({
    location: '',
    category: '',
    priceRange: '',
  });

  useEffect(() => {
    const fetchTouristSites = async () => {
      try {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJtaWNoZWxsZSIsImlhdCI6MTcxNDQ4ODQ1NywiZXhwIjoxODcyMTY4NDU3fQ.cg9eGdXaeKaKQiBtLscqfl7wUTq_BXUite33psQPjxk";
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const response = await axios.get(
          'http://localhost/wordpress/wp-json/wp/v2/tour-site?acf_format=standard&_fields=id,title,acf&per_page=20',
          { headers }
        );
        const sites = response.data.map((site) => ({
          id: site.id,
          name: site.title.rendered,
          image: site.acf.image,
          location: site.acf.location,
          category: site.acf.category && site.acf.category.name,
          price: site.acf.price,
        }));
        setTouristSites(sites);
        setFilteredSites(sites);
      } catch (error) {
        console.error('Error fetching tourist sites:', error);
      }
    };

    fetchTouristSites();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [filters]);

  const applyFilters = () => {
    let filtered = touristSites;

    if (filters.location) {
      filtered = filtered.filter((site) => site.location === filters.location);
    }

    if (filters.category) {
      filtered = filtered.filter((site) => site.category === filters.category);
    }

    if (filters.priceRange) {
      const [minPrice, maxPrice] = filters.priceRange.split('-').map(Number);
      filtered = filtered.filter((site) => {
        const sitePrice = Number(site.price);
        return (
          (!minPrice || sitePrice >= minPrice) &&
          (!maxPrice || sitePrice <= maxPrice)
        );
      });
    }

    setFilteredSites(filtered);
  };

  const handleFilterChange = (value, filterType) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

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
        <LocationFilter onFilterChange={handleFilterChange} />
        <CategoryFilter onFilterChange={handleFilterChange} />
        <PriceRangeFilter onFilterChange={handleFilterChange} />
      </div>

      {/* Main Content */}
      <main className="flex-grow p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSites.map((site) => (
            <Link key={site.id} href={`/VirtualTour/`}>
              <div className="rounded-lg overflow-hidden hover:shadow-lg transition duration-300 ease-in-out">
                <img src={site.image} alt={site.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{site.name}</h3>
                  <p className="text-sm">{site.location}</p>
                  {/* Remove category display */}
                  {site.price && <p className="text-sm">{site.price}</p>} {/* Display price if available */}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
