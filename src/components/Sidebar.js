import React, { useState } from "react";
import { FaBars, FaHome, FaChartBar, FaFileAlt, FaCog, FaUserFriends } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = ({ onToggle }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    onToggle(!isCollapsed);
  };

  return (
    <nav
      className={`h-screen fixed top-0 left-0 bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white shadow-2xl transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      } rounded-r-3xl`}
    >
      {/* Sidebar Toggle */}
      <div className="flex justify-start items-center h-16 px-4">
        <button
          onClick={toggleSidebar}
          className="text-white text-2xl focus:outline-none hover:text-gray-300"
        >
          <FaBars />
        </button>
      </div>

      {/* Sidebar Menu Items */}
      <ul className="relative mt-6 space-y-1">
        {/* Menu Item Template */}
        <li
          className={`group flex items-center ${
            isCollapsed ? "justify-center px-4" : "px-4"
          } py-4 hover:bg-gray-700 rounded-lg cursor-pointer transition duration-300`}
        >
          <FaHome className="text-xl group-hover:text-green-400" />
          {!isCollapsed && (
            <Link to="/" className="ml-4 text-lg group-hover:text-green-400">
              Home
            </Link>
          )}
        </li>
        <li
          className={`group flex items-center ${
            isCollapsed ? "justify-center px-4" : "px-4"
          } py-4 hover:bg-gray-700 rounded-lg cursor-pointer transition duration-300`}
        >
          <FaChartBar className="text-xl group-hover:text-green-400" />
          {!isCollapsed && (
            <Link to="/analytics" className="ml-4 text-lg group-hover:text-green-400">
              Analytics
            </Link>
          )}
        </li>
        <li
          className={`group flex items-center ${
            isCollapsed ? "justify-center px-4" : "px-4"
          } py-4 hover:bg-gray-700 rounded-lg cursor-pointer transition duration-300`}
        >
          <FaFileAlt className="text-xl group-hover:text-green-400" />
          {!isCollapsed && (
            <Link to="/reports" className="ml-4 text-lg group-hover:text-green-400">
              Reports
            </Link>
          )}
        </li>
        <li
          className={`group flex items-center ${
            isCollapsed ? "justify-center px-4" : "px-4"
          } py-4 hover:bg-gray-700 rounded-lg cursor-pointer transition duration-300`}
        >
          <FaCog className="text-xl group-hover:text-green-400" />
          {!isCollapsed && (
            <Link to="/settings" className="ml-4 text-lg group-hover:text-green-400">
              Settings
            </Link>
          )}
        </li>

        {/* Recruitment Menu with Submenu */}
        <li className="group relative">
          <div
            className={`flex items-center ${
              isCollapsed ? "justify-center px-4" : "px-4"
            } py-4 hover:bg-gray-700 rounded-lg cursor-pointer transition duration-300`}
          >
            <FaUserFriends className="text-xl group-hover:text-green-400" />
            {!isCollapsed && (
              <span className="ml-4 text-lg group-hover:text-green-400">
                Recruitment
              </span>
            )}
          </div>

          {/* Submenu */}
          <ul
            className={`absolute left-full top-0 ml-2 w-48 bg-gray-800 text-white shadow-xl rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300 z-50 ${
              isCollapsed ? "hidden" : ""
            }`}
          >
            <li className="px-6 py-3 hover:bg-gray-700 rounded-t-lg cursor-pointer transition duration-200">
              <Link to="/jobs">Jobs</Link>
            </li>
            <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer transition duration-200">
              Candidates
            </li>
            <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer transition duration-200">
              Submission
            </li>
            <li className="px-6 py-3 hover:bg-gray-700 rounded-b-lg cursor-pointer transition duration-200">
              Interviews
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
