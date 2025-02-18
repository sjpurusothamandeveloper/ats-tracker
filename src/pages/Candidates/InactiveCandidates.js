import React, { useState } from "react";

// Sample job data with status
const sampleCandidates = [
  { id: 1, name: "SJ Purusothaman", description: "Junior Developer", count: 1, status: "Inactive" },
  { id: 2, name: "Raksana Banu", description: "Web Designer", count: 10, status: "Inactive" },
  { id: 3, name: "Sriram", description: "UX Designer", count: 3, status: "Inactive" },
  { id: 4, name: "Mohan", description: "Project Manager", count: 7, status: "Inactive" },
  { id: 5, name: "Bhargava", description: "Data Analyst", count: 4, status: "Inactive" },
  { id: 6, name: "Selvi", description: "Project Manager", count: 12, status: "Inactive" },
  { id: 7, name: "Divo", description: "Data Analyst", count: 2, status: "Inactive" },
  { id: 8, name: "Priyanka", description: "Web Designer", count: 6, status: "Inactive" },
];

const InactiveCandidates = () => {
  const [candidates, setCandidates] = useState(sampleCandidates);

  return (
    <div className="w-full min-h-screen bg-gray-100 flex justify-center items-start p-8 overflow-hidden">
      <div className="w-full max-w-7xl bg-white rounded-xl shadow-lg p-8 flex flex-col">
        <div className="flex justify-between items-center pb-4 border-b bg-black text-white rounded-t-xl px-6 py-4">
          <h2 className="text-2xl font-bold">#Inactive Cantidates</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {candidates.map((job) => (
            <div
              key={job.id}
              className="bg-gray-50 border rounded-lg shadow p-5 hover:shadow-md transition duration-300 relative hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <span
                className={`absolute top-3 right-3 px-2 py-0.5 text-[8px] font-bold uppercase rounded-full ${
                  job.status === "Active"
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                }`}
              >
                {job.status}
              </span>

              <h3 className="text-xl font-semibold text-gray-900">
                {job.name}
              </h3>

              <p className="text-gray-600 text-sm mt-2">{job.description}</p>

              <div className="flex justify-between items-center mt-4">
                <span className="text-gray-700 text-sm font-medium">
                  {job.count} Year
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InactiveCandidates;
