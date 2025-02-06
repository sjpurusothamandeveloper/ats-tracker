import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const TopNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-white text-black shadow-lg px-8 py-3 flex justify-between items-center rounded-b-3xl">
      <h1 className="text-xl font-semibold">Hello SJP</h1>

      <div className="relative">
        {/* User Icon */}
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center space-x-2 focus:outline-none"
        >
          <FaUserCircle className="text-3xl text-gray-700 hover:text-black transition" />
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Profile
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Settings
              </li>
              <hr />
              <li className="px-4 py-2 text-red-600 hover:bg-gray-100 cursor-pointer">
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default TopNavbar;
