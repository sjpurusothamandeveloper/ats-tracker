import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Sample job data
const sampleJobs = [
  { id: 2, name: "Web Designer", description: "Design modern and responsive websites.", count: 10 },
  { id: 4, name: "Project Manager", description: "Oversee and manage software projects.", count: 7 },
];

const RecentJobs = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState(sampleJobs);

  const handleCreateJob = () => {
    navigate("/job/create")
  }

  return (
    <div className="w-full min-h-screen bg-gray-100 flex justify-center items-start p-8 overflow-hidden">
      <div className="w-full max-w-7xl bg-white rounded-xl shadow-lg p-8 flex flex-col">
        <div className="flex justify-between items-center pb-4 border-b bg-black text-white rounded-t-xl px-6 py-4">
          <h2 className="text-2xl font-bold">#Recent Candidates</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-gray-50 border rounded-lg shadow p-5 hover:shadow-md transition duration-300 hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <h3 className="text-xl font-semibold text-gray-900">{job.name}</h3>

              <p className="text-gray-600 text-sm mt-2">{job.description}</p>

              <div className="flex justify-between items-center mt-4">
                <span className="text-gray-700 text-sm font-medium">{job.count} Openings</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentJobs;
