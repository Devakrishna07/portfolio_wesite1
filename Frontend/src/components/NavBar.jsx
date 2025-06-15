import React from 'react'
import logo from '../assets/profilelogo.png'
import ToggleButton from './ToggleButton'

function NavBar({ onThemeChange }) {
  return (
    <nav className="w-screen border-gray-200 bg-gray-900 dark:bg-gray-800 dark:border-gray-700 fixed top-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-6" alt="Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white dark:text-[#DFD0B8]">Dev</span>
        </a>

        {/* Nav Links */}
        <div className="hidden md:block" id="navbar-menu">
          <ul className="flex space-x-4 font-medium bg-transparent text-blue-700 dark:text-white">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="block py-2 px-3 md:p-0 text-white dark:text-[#DFD0B8] hover:text-blue-700 dark:hover:text-blue-400"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Theme Toggle */}
        <ToggleButton
          modeA="light"
          modeB="dark"
          iconA="☀️"
          iconB="🌙"
          storageKey="theme"
          onToggle={onThemeChange}
        />
      </div>
    </nav>
  );
}

export default NavBar;
