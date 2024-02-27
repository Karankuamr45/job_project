import React, { useState } from "react";
import { BsSearch, BsList, BsX } from "react-icons/bs";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gray-800 p-4 flex justify-between md:justify-center items-center">
      <div className="flex items-center justify-between">
        <div className=" mr-auto relative">
          <input
            type="text"
            placeholder="Search"
            className=" lg:ml-52 py-2 px-10 rounded-md bg-white text-black focus:outline-none"
          />
          <div className=" lg:ml-52 absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <BsSearch className="text-gray-400" />
          </div>
        </div>

        <div className="mx-4 hidden md:block">
          <a href="#" className="text-white mx-7">
            Categories
          </a>

          <a href="#" className="text-white mx-7">
            Website Builders
          </a>

          <a href="#" className="text-white mx-2">
            Today's Deals
          </a>
        </div>
      </div>

      <div>
        <button
          className="text-white mr-4 lg:hidden md:hidden"
          onClick={toggleMenu}
        >
          <BsList className="h-6 w-6" />
        </button>
      </div>

      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-gray-800 text-white flex flex-col justify-center items-center z-50 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <a href="#" className="text-white my-4 block">
          Categories
        </a>
        <a href="#" className="text-white my-4 block">
          Website Builders
        </a>
        <a href="#" className="text-white my-4 block">
          Today's Deals
        </a>
        {isMenuOpen && (
          <button
            className="text-white absolute top-5 right-7 lg:hidden"
            onClick={closeMenu}
          >
            <BsX className="h-8 w-8" />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Header;
