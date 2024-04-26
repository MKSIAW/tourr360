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
    <header className="bg-white text-black-600 p-4 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center space-x-2">
        <Link href="/dashboard">
          <id className="text-2xl font-semibold">Tour360</id>
        </Link>
        <img src="/images/dobiison-virtual-tour-logo.webp" alt="Profile Icon" className="h-12 w-12 rounded-full" />
      </div>

      <div className="flex items-center space-x-4">
        <Link href="#" className="hover:bg-grey hover:text-black py-2 px-4 rounded-full">Discover</Link>
        <Link href="#" className="hover:bg-grey hover:text-black py-2 px-4 rounded-full">Trips</Link>
        <Link href="#" className="hover:bg-grey hover:text-black py-2 px-4 rounded-full">Review</Link>
        <Link href="#" className="hover:bg-grey hover:text-black py-2 px-4 rounded-full">More</Link>
      </div>

      <div className="flex items-center space-x-4">
        <button className="bg-black text-white py-2 px-4 rounded-full">Sign In</button>
      </div>
    </header>
  );
}

export default Header;