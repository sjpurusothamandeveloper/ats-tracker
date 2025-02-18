import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlusCircle, FaEye, FaEdit } from "react-icons/fa";

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
    navigate("/job/create");
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 flex justify-center items-start p-8">
      {/* Container */}
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-xl p-8 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center pb-4 border-b bg-black text-white rounded-t-xl px-6 py-4">
          <h2 className="text-2xl font-bold"># Job List</h2>
          {/* Add Job Button */}
          <button
            className="bg-white text-black py-2 px-6 rounded-lg flex items-center gap-2 shadow-md hover:bg-gray-200 transform hover:scale-105 transition duration-300 ease-in-out"
            onClick={handleCreateJob}
          >
            <FaPlusCircle size={18} />
            Add Job
          </button>
        </div>

        {/* Job List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <h3 className="text-xl font-semibold text-gray-900">{job.name}</h3>
              <p className="text-gray-600 text-sm mt-2">{job.description}</p>

              <div className="flex justify-between items-center mt-4">
                <span className="text-gray-700 text-sm font-medium">
                  {job.count} Openings
                </span>

                <div className="flex space-x-4">
                  <button className="flex items-center gap-1 text-black text-sm font-medium hover:text-gray-800 transition duration-300">
                    <FaEye size={14} />
                    View
                  </button>
                  <button className="flex items-center gap-1 text-black text-sm font-medium hover:text-gray-800 transition duration-300">
                    <FaEdit size={14} />
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
