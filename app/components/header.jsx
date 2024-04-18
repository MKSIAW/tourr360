'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  const toggleReview = () => {
    setIsReviewOpen(!isReviewOpen);
  };

  const closeReview = () => {
    setIsReviewOpen(false);
  };

  return (
    <header className="bg-white text-blue-600 p-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Link href="/dashboard">
          <id className="text-2xl font-semibold">Tour360</id>
        </Link>
        <img src="/images/dobiison-virtual-tour-logo.webp" alt="Profile Icon" className="h-12 w-12 rounded-full" />
      </div>

      <div className="flex items-center space-x-4">
        <input type="text" placeholder="Search..." className="p-2 rounded-full bg-blue-600 text-white border-none focus:outline-none" /> 
        
        <div className="relative">
          <button className="text-blue-600 hover:underline" onClick={toggleReview}>
            Review
          </button>
          {isReviewOpen && (
            <div className="absolute top-full right-0 bg-white shadow-lg rounded-md mt-2 w-48">
              <ul className="py-2">
                <li>
                  <Link href="/write-review" passHref>
                    <id className="block px-4 py-2 hover:bg-blue-100" onClick={closeReview}>
                      Write a Review
                    </id>
                  </Link>
                </li>
                <li>
                  <Link href="/view-reviews" passHref>
                    <id className="block px-4 py-2 hover:bg-blue-100" onClick={closeReview}>
                      View Reviews
                    </id>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        <Link href="/signin" passHref>
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full">
            Sign In
          </button>
        </Link>

        <div className="flex items-center space-x-2">
          <Link href="/settings" className="text-blue-600">Settings</Link>
          <Link href="/cart" className="text-blue-600">Cart</Link>
          <Link href="/profile" className="text-blue-600">Profile</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
