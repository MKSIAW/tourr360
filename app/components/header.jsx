'use client'
import React, { useState } from 'react';
import Link from 'next/link';

// Define NavLink component
const NavLink = ({ href, children }) => {
  return (
    <Link href={href}>
      <id className="block px-4 py-2 text-sm hover:bg-gray-100">{children}</id>
    </Link>
  );
};

const Header = () => {
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const toggleReview = () => {
    setIsReviewOpen(!isReviewOpen);
  };

  const toggleMore = () => {
    setIsMoreOpen(!isMoreOpen);
  };

  return (
    <header className="bg-white text-black-600 p-4 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <span className="text-2xl font-semibold">Tour360</span>
        </Link>
        <img src="/images/owl.jpg" alt="Profile Icon" className="h-12 w-12 rounded-full" />
      </div>

      <div className="flex items-center space-x-4">
        <NavLink href="/dashboard">Virtual Tour</NavLink>
        
        {/* Trips dropdown */}
        <div className="relative">
          <button className="hover:bg-grey hover:text-black py-2 px-4 rounded-full" onClick={toggleReview}>
            Trips
          </button>
          {/* Dropdown content */}
          {isReviewOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-lg z-10">
              {/* Trips options */}
              <NavLink href="#">Adventure Trips</NavLink>
              <NavLink href="#">Cultural Trips</NavLink>
              <NavLink href="#">Relaxation Trips</NavLink>
              <NavLink href="#">Family Trips</NavLink>
              <NavLink href="/customize">Customized Trips</NavLink>
            </div>
          )}
        </div>

        {/* More dropdown */}
        <div className="relative">
          <button className="hover:bg-grey hover:text-black py-2 px-4 rounded-full" onClick={toggleMore}>
            More
          </button>
          {/* Dropdown content */}
          {isMoreOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-lg z-10">
              {/* More options */}
              <NavLink href="#">Flights</NavLink>
              <NavLink href="#">Cruises</NavLink>
              <NavLink href="#">Rental Cars</NavLink>
              <NavLink href="#">Forums</NavLink>
            </div>
          )}
        </div>

        <NavLink href="/write-review">Review</NavLink>
      </div>

      <div className="flex items-center space-x-4">
        <NavLink href="/signin">
          <button className="bg-black text-white py-2 px-4 rounded-full cursor-pointer">Sign In</button>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
