import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import TopNavbar from "./components/TopNavbar";
import Jobs from "./pages/jobs";

const App = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleSidebarToggle = (collapsed) => {
    setIsSidebarCollapsed(collapsed);
  };

  return (
    <Router>
      <div className="flex bg-gray-100 min-h-screen">
        {/* Sidebar */}
        <Sidebar onToggle={handleSidebarToggle} />

        {/* Main Content Wrapper */}
        <div
          className={`flex-1 transition-all duration-300 ${
            isSidebarCollapsed ? "ml-16" : "ml-64"
          }`}
        >
          {/* Top Navbar */}
          <TopNavbar />

          {/* Main Content */}
          <main className="p-6">
            <Routes>
              <Route path="/" element={<h2 className="text-2xl font-semibold">Welcome to the Dashboard!</h2>} />
              <Route path="/jobs" element={<Jobs />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
