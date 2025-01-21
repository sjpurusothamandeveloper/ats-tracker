import React from "react";

const TopNavbar = () => {
  return (
    <header className="bg-gradient-to-r from-green-400 to-green-600 text-white shadow-xl px-8 py-3 flex justify-between items-center rounded-b-3xl">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className="flex items-center space-x-6">
        <span className="text-lg">Welcome, User</span>
        <button className="bg-white text-green-600 py-2 px-6 rounded-full hover:bg-gray-100 focus:outline-none">
          Logout
        </button>
      </div>
    </header>
  );
};

export default TopNavbar;
