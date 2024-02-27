import React from "react";
import { FiChevronDown } from "react-icons/fi";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="mb-8 md:mb-0">
          <h3 className="text-xl font-bold mb-4">Categories</h3>
          <ul className="text-sm space-y-2">
            <li>Web Builder</li>
            <li>Hoisting</li>
            <li>Data Center</li>
            <li>Robotic Automation</li>
          </ul>
        </div>
        <div className="mb-8 md:mb-0">
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <ul className="text-sm space-y-2">
            <li>Contact</li>
            <li>Privacy Policies</li>
            <li>Term of Services</li>
            <li>About</li>
          </ul>
        </div>
        <div className="flex items-center">
          <h3 className="text-xl font-bold mr-2">United States</h3>
          <FiChevronDown size={24} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
