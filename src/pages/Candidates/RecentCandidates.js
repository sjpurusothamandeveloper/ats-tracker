import React, { useState } from "react";

// Sample job data
const sampleCandidates = [
  { id: 1, name: "SJ Purusothaman", description: "Junior Developer", count: 1 },
  { id: 2, name: "Raksana Banu", description: "Web Designer", count: 10 },
  { id: 3, name: "Bhargava", description: "Data Analyst", count: 4 },
];

const RecentCandidates = () => {
  const [candidates, setCandidates] = useState(sampleCandidates);

  return (
    <div className="w-full min-h-screen bg-gray-100 flex justify-center items-start p-8 overflow-hidden">
      {/* White Card - Dynamic Height Without Scrollbar */}
      <div className="w-full max-w-7xl bg-white rounded-xl shadow-lg p-8 flex flex-col">
        {/* Header */}
        <div className="text-left pb-4 border-b">
          <h2 className="text-xl font-bold text-gray-900">#Recent Candidates</h2>
        </div>

        {/* Candidate List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {candidates.map((job) => (
            <div
              key={job.id}
              className="bg-gray-50 border rounded-lg shadow p-5 hover:shadow-md transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900">{job.name}</h3>

              <p className="text-gray-600 text-sm mt-2">{job.description}</p>

              <div className="flex justify-between items-center mt-4">
                <span className="text-gray-700 text-sm font-medium">{job.count} Year</span>

                <div className="flex space-x-4">
                  <button className="text-black underline text-sm hover:text-gray-800 transition duration-300">
                    View
                  </button>
                  <button className="text-black underline text-sm hover:text-gray-800 transition duration-300">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentCandidates;
