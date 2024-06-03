import React, { useState } from 'react';
import Link from 'next/link';

// Define NavLink component
const NavLink = ({ href, children }) => {
  return (
    <Link href={href}>
      <id className="block px-4 py-2 text-sm font-medium hover:bg-gray-100">{children}</id>
    </Link>
  );
};

const Header = () => {
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleReview = () => {
    setIsReviewOpen(!isReviewOpen);
  };

  const toggleMore = () => {
    setIsMoreOpen(!isMoreOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
        {/* Hamburger Menu for Mobile */}
        <button className="block lg:hidden" onClick={toggleMobileMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav className={`lg:flex space-x-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <NavLink href="/dashboard">Virtual Tour</NavLink>
          <div className="relative">
            <button className="hover:bg-grey hover:text-black py-2 px-4 rounded-full" onClick={toggleReview}>
              Trips
            </button>
            {isReviewOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-lg z-10">
                <NavLink href="/customize">Customized Trips</NavLink>
              </div>
            )}
          </div>
          <div className="relative">
            <button className="hover:bg-grey hover:text-black py-2 px-4 rounded-full" onClick={toggleMore}>
              More
            </button>
            {isMoreOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-lg z-10">
                <NavLink href="/travel-tips">Travel Tips</NavLink>
              </div>
            )}
          </div>
          <NavLink href="/write-review">Review</NavLink>
        </nav>
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
