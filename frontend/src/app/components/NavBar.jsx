import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="w-full bg-gray-900 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold tracking-widest">Sentinel-2</div>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className={`transition ${
                isActive("/") ? "text-blue-400 font-bold" : "hover:text-blue-400"
              }`}
            >
              หน้าหลัก
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className={`transition ${
                isActive("/profile") ? "text-blue-400 font-bold" : "hover:text-blue-400"
              }`}
            >
              ผู้จัดทำโครงการ
            </Link>
          </li>
          <li>
            <Link
              to="/upload"
              className={`transition ${
                isActive("/upload") ? "text-blue-400 font-bold" : "hover:text-blue-400"
              }`}
            >
              ทำนาย
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
