import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white px-6 py-4 sticky top-0 z-50 shadow-md">
      {/* Container for logo and nav/hamburger */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Worknex</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          <a href="#home" className="hover:text-yellow-400 transition">Home</a>
          <a href="#about" className="hover:text-yellow-400 transition">About</a>
          <a href="#services" className="hover:text-yellow-400 transition">Services</a>
          <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="mt-4 md:hidden text-center">
          <ul className="flex flex-col gap-4">
            <li><a href="#home" className="hover:text-yellow-400 transition">Home</a></li>
            <li><a href="#about" className="hover:text-yellow-400 transition">About</a></li>
            <li><a href="#services" className="hover:text-yellow-400 transition">Services</a></li>
            <li><a href="#contact" className="hover:text-yellow-400 transition">Contact</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
