import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="w-full bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-xl font-bold">WebApp</div>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/upload" className="hover:text-gray-300">
            Upload
            </Link>
          </li>
          <li>
            <Link to="/profile" className="hover:text-gray-300">
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
