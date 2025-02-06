import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import TopNavbar from "./components/TopNavbar";
import Jobs from "./pages/Jobs/CreateJob";
import JobList from "./pages/Jobs/jobList";
import Dashboard from "./pages/Dashboard";
import ActiveJobs from "./pages/Jobs/ActiveJobs";
import InactiveJobs from "./pages/Jobs/InactiveJobs";
import RecentJobs from "./pages/Jobs/RecentJobs";
import CandidatesList from "./pages/Candidates/CandidatesList";
import ActiveCandidates from "./pages/Candidates/ActiveCandidates";
import InactiveCandidates from "./pages/Candidates/InactiveCandidates";
import RecentCandidates from "./pages/Candidates/RecentCandidates";
import CreateCandidates from "./pages/Candidates/CreateCandidates";


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

              <Route path="/" element={<Dashboard />} />
              <Route path="/job/create" element={<Jobs />} />
              <Route path="/joblist" element={<JobList />} />
              <Route path="/activejobs" element={<ActiveJobs />} />
              <Route path="/inactivejobs" element={<InactiveJobs />} />
              <Route path="/recentjobs" element={<RecentJobs />} />

              <Route path="/candidate/create" element={<CreateCandidates />} />
              <Route path="/candidatelist" element={<CandidatesList />} />
              <Route path="/activecandidates" element={<ActiveCandidates />} /> 
              <Route path="/inactivecandidates" element={<InactiveCandidates />} /> 
              <Route path="/recentcandidates" element={<RecentCandidates />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
