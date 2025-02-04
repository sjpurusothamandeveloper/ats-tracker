import React, { useState } from "react";
import { FaBars, FaHome, FaChartBar, FaFileAlt, FaCog, FaUserFriends, FaChevronRight, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = ({ onToggle }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isRecruitmentSubmenuOpen, setIsRecruitmentSubmenuOpen] = useState(false);
  const [isJobsSubmenuOpen, setIsJobsSubmenuOpen] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    onToggle(!isCollapsed);
  };

  const toggleRecruitmentSubmenu = () => {
    setIsRecruitmentSubmenuOpen((prev) => !prev);
  };

  const toggleJobsSubmenu = () => {
    setIsJobsSubmenuOpen((prev) => !prev);
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
        {/* Home Menu */}
        <li className="flex items-center px-4 py-4 hover:bg-gray-700 rounded-lg cursor-pointer transition duration-300">
          <FaHome className="text-xl hover:text-green-400" />
          {!isCollapsed && <Link to="/" className="ml-4 text-lg hover:text-green-400">Home</Link>}
        </li>

        {/* Analytics Menu */}
        <li className="flex items-center px-4 py-4 hover:bg-gray-700 rounded-lg cursor-pointer transition duration-300">
          <FaChartBar className="text-xl hover:text-green-400" />
          {!isCollapsed && <Link to="/analytics" className="ml-4 text-lg hover:text-green-400">Analytics</Link>}
        </li>

        {/* Reports Menu */}
        <li className="flex items-center px-4 py-4 hover:bg-gray-700 rounded-lg cursor-pointer transition duration-300">
          <FaFileAlt className="text-xl hover:text-green-400" />
          {!isCollapsed && <Link to="/reports" className="ml-4 text-lg hover:text-green-400">Reports</Link>}
        </li>

        {/* Settings Menu */}
        <li className="flex items-center px-4 py-4 hover:bg-gray-700 rounded-lg cursor-pointer transition duration-300">
          <FaCog className="text-xl hover:text-green-400" />
          {!isCollapsed && <Link to="/settings" className="ml-4 text-lg hover:text-green-400">Settings</Link>}
        </li>

        {/* Recruitment Menu with Clickable Dropdown */}
        <li className="relative">
          <div
            className="flex justify-between items-center px-4 py-4 hover:bg-gray-700 rounded-lg cursor-pointer transition duration-300"
            onClick={toggleRecruitmentSubmenu}
          >
            <div className="flex items-center">
              <FaUserFriends className="text-xl hover:text-green-400" />
              {!isCollapsed && <span className="ml-4 text-lg hover:text-green-400">Recruitment</span>}
            </div>
            {!isCollapsed && <FaChevronDown className="text-sm hover:text-green-400" />}
          </div>

          {/* Recruitment Submenu (Appears Below) */}
          {isRecruitmentSubmenuOpen && (
            <ul className="absolute left-0 top-full w-full bg-gray-800 text-white shadow-xl rounded-lg transition-opacity duration-300">
              <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer transition duration-200">
                <Link to="/candidates">Candidates</Link>
              </li>
              <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer transition duration-200">Submission</li>
              <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer transition duration-200">
                <Link to="/interview">Interviews</Link>
              </li>

              {/* Jobs Button with Clickable Submenu */}
              <li
                className="flex justify-between items-center px-6 py-3 hover:bg-gray-700 cursor-pointer transition duration-200"
                onClick={toggleJobsSubmenu}
              >
                <span>Jobs</span>
                <FaChevronRight className="text-sm hover:text-green-400" />
              </li>
            </ul>
          )}
        </li>
      </ul>

      {/* Jobs Submenu (Appears Just Right of Jobs Button) */}
      {isJobsSubmenuOpen && (
        <ul
          className="absolute bg-gray-800 text-white shadow-xl rounded-lg w-48 transition-opacity duration-300"
          style={{
            top: "calc(50% + 20px)", // Position just below Jobs button
            left: "100%", // Align exactly right of Jobs button
          }}
        >
          <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer transition duration-200">
            <Link to="/jobs">All Jobs</Link>
          </li>
          <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer transition duration-200">
            <Link to="/jobs/active">Active Jobs</Link>
          </li>
          <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer transition duration-200">
            <Link to="/jobs/inactive">Inactive Jobs</Link>
          </li>
          <li className="px-6 py-3 hover:bg-gray-700 rounded-b-lg cursor-pointer transition duration-200">
            <Link to="/jobs/recent">Recent Jobs</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Sidebar;
