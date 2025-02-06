import React, { useState, useEffect, useRef } from "react";
import {
  FaBars,
  FaHome,
  FaChartBar,
  FaFileAlt,
  FaCog,
  FaUserFriends,
  FaChevronRight,
  FaChevronDown,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = ({ onToggle }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isRecruitmentSubmenuOpen, setIsRecruitmentSubmenuOpen] = useState(false);
  const [isJobsSubmenuOpen, setIsJobsSubmenuOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    onToggle(!isCollapsed);
  };

  const toggleRecruitmentSubmenu = () => {
    setIsRecruitmentSubmenuOpen((prev) => !prev);
    setIsJobsSubmenuOpen(false); // Close jobs submenu when opening recruitment
  };

  const toggleJobsSubmenu = () => {
    setIsJobsSubmenuOpen((prev) => !prev);
  };

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsRecruitmentSubmenuOpen(false);
        setIsJobsSubmenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={sidebarRef}
      className={`h-screen fixed top-0 left-0 bg-black text-white shadow-xl transition-all duration-300 ${
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
        <Link to="/" className="block">
          <li className="flex items-center px-4 py-3 hover:bg-gray-700 rounded-lg cursor-pointer transition duration-300">
            <FaHome className="text-xl hover:text-green-400" />
            {!isCollapsed && (
              <span className="ml-4 text-lg hover:text-green-400">Home</span>
            )}
          </li>
        </Link>

        {/* Recruitment Menu */}
        <li className="relative">
          <div
            className="flex justify-between items-center px-4 py-3 hover:bg-gray-700 rounded-lg cursor-pointer transition duration-300"
            onClick={toggleRecruitmentSubmenu}
          >
            <div className="flex items-center">
              <FaUserFriends className="text-xl hover:text-green-400" />
              {!isCollapsed && (
                <span className="ml-4 text-lg hover:text-green-400">
                  Recruitment
                </span>
              )}
            </div>
            {!isCollapsed && (
              <FaChevronDown
                className={`text-sm transform transition-transform ${
                  isRecruitmentSubmenuOpen ? "rotate-180" : ""
                }`}
              />
            )}
          </div>

          {/* Recruitment Submenu */}
          {isRecruitmentSubmenuOpen && (
            <ul className="ml-4 mt-2 bg-gray-800 text-white shadow-xl rounded-lg overflow-hidden transition-all duration-300">
              {/* Jobs Button */}
              <li
                className="flex justify-between items-center px-6 py-3 hover:bg-gray-700 cursor-pointer transition duration-200"
                onClick={toggleJobsSubmenu}
              >
                <span>Jobs</span>
                <FaChevronRight
                  className={`text-sm transform transition-transform ${
                    isJobsSubmenuOpen ? "rotate-90" : ""
                  }`}
                />
              </li>
              <Link to="/candidates" className="block">
                <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer transition duration-200">
                  Candidates
                </li>
              </Link>

              <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer transition duration-200">
                Submission
              </li>

              <Link to="/interview" className="block">
                <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer transition duration-200">
                  Interviews
                </li>
              </Link>

              {/* Jobs Submenu */}
              {isJobsSubmenuOpen && (
                <ul className="absolute left-full top-32 bg-gray-900 text-white shadow-lg rounded-lg w-48 p-2 z-50 opacity-100">
                  <Link to="/joblist" className="block">
                    <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer transition duration-200">
                      All Jobs
                    </li>
                  </Link>

                  <Link to="/jobs/active" className="block">
                    <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer transition duration-200">
                      Active Jobs
                    </li>
                  </Link>

                  <Link to="/jobs/inactive" className="block">
                    <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer transition duration-200">
                      Inactive Jobs
                    </li>
                  </Link>

                  <Link to="/jobs/recent" className="block">
                    <li className="px-6 py-3 hover:bg-gray-700 rounded-b-lg cursor-pointer transition duration-200">
                      Recent Jobs
                    </li>
                  </Link>
                </ul>
              )}
            </ul>
          )}
        </li>

        {/* Settings Menu */}
        <Link to="/settings" className="block">
          <li className="flex items-center px-4 py-3 hover:bg-gray-700 rounded-lg cursor-pointer transition duration-300">
            <FaCog className="text-xl hover:text-green-400" />
            {!isCollapsed && (
              <span className="ml-4 text-lg hover:text-green-400">
                Settings
              </span>
            )}
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Sidebar;
