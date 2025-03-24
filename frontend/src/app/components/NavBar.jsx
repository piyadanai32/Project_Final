import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="w-full bg-gray-900 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold tracking-widest">Sentinel-2</div>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-blue-400 transition">
              หน้าหลัก
            </Link>
          </li>
          <li>
            <Link to="/upload" className="hover:text-blue-400 transition">
              ทำนาย
            </Link>
          </li>
          <li>
            <Link to="/profile" className="hover:text-blue-400 transition">
              ผู้จัดทำโครงการ
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
