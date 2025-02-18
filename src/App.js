import React, { useState, lazy, Suspense, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Lazy load components
const Sidebar = lazy(() => import("./components/Sidebar"));
const TopNavbar = lazy(() => import("./components/TopNavbar"));

// Lazy load pages
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Jobs = lazy(() => import("./pages/Jobs/CreateJob"));
const JobList = lazy(() => import("./pages/Jobs/jobList"));
const ActiveJobs = lazy(() => import("./pages/Jobs/ActiveJobs"));
const InactiveJobs = lazy(() => import("./pages/Jobs/InactiveJobs"));
const RecentJobs = lazy(() => import("./pages/Jobs/RecentJobs"));

const CandidatesList = lazy(() => import("./pages/Candidates/CandidatesList"));
const CreateCandidates = lazy(() => import("./pages/Candidates/CreateCandidates"));
const ActiveCandidates = lazy(() => import("./pages/Candidates/ActiveCandidates"));
const InactiveCandidates = lazy(() => import("./pages/Candidates/InactiveCandidates"));
const RecentCandidates = lazy(() => import("./pages/Candidates/RecentCandidates"));

const InterviewList = lazy(() => import("./pages/Interviews/InterviewList"));

// Fallback Loader
const Loader = () => (
  <div className="w-full h-screen flex items-center justify-center text-gray-600">
    <span className="animate-pulse text-lg">Loading...</span>
  </div>
);

const App = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // Memoized function to prevent unnecessary re-renders
  const handleSidebarToggle = useCallback((collapsed) => {
    setIsSidebarCollapsed(collapsed);
  }, []);

  return (
    <Router>
      <div className="flex bg-gray-100 min-h-screen">
        {/* Sidebar */}
        <Suspense fallback={<Loader />}>
          <Sidebar onToggle={handleSidebarToggle} />
        </Suspense>

        {/* Main Content */}
        <div className={`flex-1 transition-all duration-300 ${isSidebarCollapsed ? "ml-16" : "ml-64"}`}>
          {/* Top Navbar */}
          <Suspense fallback={<Loader />}>
            <TopNavbar />
          </Suspense>

          {/* Page Content */}
          <main className="p-6">
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/ats-tracker" element={<Dashboard />} />
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

                <Route path="/interviewlist" element={<InterviewList />} />
              </Routes>
            </Suspense>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
