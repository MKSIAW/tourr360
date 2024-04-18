import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const LocationFilter = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track dropdown visibility
  const [selectedRegion, setSelectedRegion] = useState(null); // State to track selected region

  // List of regions in Ghana
  const regions = [
    'Greater Accra',
    'Ashanti',
    'Central',
    'Eastern',
    'Western',
    'Volta',
    'Northern',
    'Upper East',
    'Upper West'
  ];

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle region selection
  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="relative">
      <div className="bg-white p-4 rounded-lg flex items-center justify-between mb-4 cursor-pointer" onClick={toggleDropdown}>
        <h3 className="text-lg font-semibold">{selectedRegion || 'Select Region'}</h3>
        <FiChevronDown className={`text-gray-600 ${isOpen ? 'transform rotate-180' : ''}`} />
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 z-10 bg-white border border-gray-200 shadow-lg rounded-lg py-2 px-4">
          {regions.map(region => (
            <div key={region} className="cursor-pointer" onClick={() => handleRegionSelect(region)}>
              {region}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default LocationFilter;
