import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const CategoryFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  // Sample categories for demonstration
  const categories = [
    'Adventure',
    'Sightseeing',
    'Cultural',
    'Culinary',
    'Historical',
    'Luxury',
    'Budget',
    'Family-friendly',
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsOpen(false);
    // Logic to handle category selection (e.g., filter content based on category)
    console.log('Selected category:', category);
  };

  return (
    <div className="relative">
      <div className="bg-white p-4 rounded-lg flex items-center justify-between mb-4 cursor-pointer" onClick={toggleDropdown}>
        <h3 className="text-lg font-semibold">{selectedCategory || 'Category'}</h3>
        <FiChevronDown className={`text-gray-600 ${isOpen ? 'transform rotate-180' : ''}`} />
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 z-10 bg-white border border-gray-200 shadow-lg rounded-lg py-2 px-4">
          {categories.map(category => (
            <div
              key={category}
              className="cursor-pointer hover:bg-gray-100 py-1 px-2 rounded-md"
              onClick={() => handleCategorySelect(category)}
            >
              {category}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryFilter;
