import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const PriceRangeFilter = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track dropdown visibility
  const [selectedRange, setSelectedRange] = useState(null); // State to track selected price range

  // List of price range options
  const priceRanges = [
    'Any',
    'Less than $50',
    '$50 - $100',
    '$100 - $200',
    '$200 - $500',
    'More than $500'
  ];

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle price range selection
  const handleRangeSelect = (range) => {
    setSelectedRange(range);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="relative">
      <div className="bg-white p-4 rounded-lg flex items-center justify-between mb-4 cursor-pointer" onClick={toggleDropdown}>
        <h3 className="text-lg font-semibold">{selectedRange || 'Select Price Range'}</h3>
        <FiChevronDown className={`text-gray-600 ${isOpen ? 'transform rotate-180' : ''}`} />
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 z-10 bg-white border border-gray-200 shadow-lg rounded-lg py-2 px-4">
          {priceRanges.map(range => (
            <div key={range} className="cursor-pointer" onClick={() => handleRangeSelect(range)}>
              {range}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PriceRangeFilter;
