import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const NavComponent = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Contact", path: "/contact" },
    { name: "Profile", path: "/profile" },
  ];

  const toggleMobileNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <nav className="bg-orange-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="https://i.pinimg.com/736x/ab/ff/d8/abffd8d99ebc0d1ff3b15257320a0007.jpg"
            alt="Logo"
            className="h-12 w-12 rounded-full"
          />
          <h1 className="font-bold text-2xl text-white font-serif">
            Melody Bites
          </h1>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          {isNavOpen ? (
            <FaTimes
              className="text-white text-2xl cursor-pointer"
              onClick={toggleMobileNav}
            />
          ) : (
            <FaBars
              className="text-white text-2xl cursor-pointer"
              onClick={toggleMobileNav}
            />
          )}
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-white hover:text-black transition-colors ${
                    isActive ? "font-bold underline" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        {isNavOpen && (
          <div className="absolute top-20 left-0 w-64 bg-orange-600 h-screen flex flex-col items-center justify-start md:hidden">
            <ul className="space-y-6 text-center">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `text-white text-xl hover:text-black transition-colors ${
                        isActive ? "font-bold underline" : ""
                      }`
                    }
                    onClick={toggleMobileNav}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavComponent;
