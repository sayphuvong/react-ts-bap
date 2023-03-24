import React from "react";
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="bg-gray-800 px-4 py-2">
      <div className="flex justify-between">
        <Link to="/" className="text-white font-bold text-xl">
          Logo
        </Link>
        <ul className="flex">
          <li className="ml-6">
            <Link to="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
          </li>
          <li className="ml-6">
            <Link to="/about" className="text-gray-300 hover:text-white">
              About
            </Link>
          </li>
          <li className="ml-6">
            <Link to="/contact" className="text-gray-300 hover:text-white">
              Contact
            </Link>
          </li>
          <li className="ml-6">
            <Link to="/legacy" className="text-gray-300 hover:text-white">
              Legacy
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
