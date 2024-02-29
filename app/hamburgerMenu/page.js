

import React from 'react';
import { useClient } from 'next/client'; // Import the useClient hook


const HamburgerMenu = () => {
  // Use the useClient hook to wrap useState
  const [isOpen, setIsOpen] = useClient(() => useState(false));

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu" onClick={toggleMenu}>
      <div className={`line ${isOpen ? 'open' : ''}`}></div>
      <div className={`line ${isOpen ? 'open' : ''}`}></div>
      <div className={`line ${isOpen ? 'open' : ''}`}></div>
      <style js>{`
        /* Hamburger menu styles */
      `}</style>
    </div>
  );
}

export default HamburgerMenu;
