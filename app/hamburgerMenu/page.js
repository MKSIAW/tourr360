
import { useState } from 'next';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

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
