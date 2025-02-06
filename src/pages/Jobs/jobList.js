import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Sample job data
const sampleJobs = [
  { id: 1, name: "Junior Developer", description: "Entry-level software developer role.", count: 5 },
  { id: 2, name: "Web Designer", description: "Design modern and responsive websites.", count: 10 },
  { id: 3, name: "UX Designer", description: "Create seamless user experiences.", count: 3 },
  { id: 4, name: "Project Manager", description: "Oversee and manage software projects.", count: 7 },
  { id: 5, name: "Data Analyst", description: "Analyze data trends and patterns.", count: 4 },
];

const JobList = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState(sampleJobs);

  const handleCreateJob = () => {
    navigate("/job/create")
  }

  return (
    <div className="w-full min-h-screen bg-gray-100 flex justify-center items-start p-8 overflow-hidden">
      {/* White Card - Dynamic Height Without Scrollbar */}
      <div className="w-full max-w-7xl bg-white rounded-xl shadow-lg p-8 flex flex-col">
        {/* Header */}
        <div className="text-left pb-4 border-b">
          <h2 className="text-xl font-bold text-gray-900">#Jobs</h2>
        </div>

        {/* Add Job Button */}
        <div className="flex justify-end mt-4">
          <button 
          className="bg-black text-white py-1 px-6 rounded-lg shadow-md hover:bg-gray-900 transform hover:scale-105 transition duration-300 ease-in-out"
          onClick={() => handleCreateJob()}
          >
            + Add Job
          </button>
        </div>

        {/* Job List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-gray-50 border rounded-lg shadow p-5 hover:shadow-md transition duration-300"
            >
              {/* Job Title */}
              <h3 className="text-xl font-semibold text-gray-900">{job.name}</h3>

              {/* Job Description */}
              <p className="text-gray-600 text-sm mt-2">{job.description}</p>

              {/* Footer Section */}
              <div className="flex justify-between items-center mt-4">
                <span className="text-gray-700 text-sm font-medium">{job.count} Openings</span>

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

export default JobList;
