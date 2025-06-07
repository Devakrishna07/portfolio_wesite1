import React, { useState, useEffect } from 'react';
import { Home, User, Phone, Layers } from 'lucide-react';

function NavBar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { name: 'Home', icon: <Home className="w-6 h-6" /> },
    { name: 'About', icon: <User className="w-6 h-6" /> },
    { name: 'Contact', icon: <Phone className="w-6 h-6" /> },
    { name: 'Services', icon: <Layers className="w-6 h-6" /> },
  ];

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShowNavbar(false); // Scrolling down → hide
      } else {
        setShowNavbar(true); // Scrolling up → show
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`w-full bg-gray-200 px-4 h-20 fixed top-0 z-50 transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex items-center justify-between h-full">
        {/* Logo + Subheading */}
        <div className="flex flex-col items-center ml-4">
          <img
            src=""
            alt="Logo"
            className="border border-gray-400 p-2 w-10 h-10 rounded-full"
          />
          <span className="text-xs text-gray-700 mt-1">Your Subheading</span>
        </div>

        {/* Nav items */}
        <ul className="flex flex-row items-center gap-8 mr-4 hidden md:flex">
          {navItems.map(({ name, icon }) => (
            <li
              key={name}
              className="flex flex-col items-center text-center cursor-pointer hover:text-blue-600 transition-colors duration-200"
            >
              {icon}
              <span className="text-xs mt-1">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
