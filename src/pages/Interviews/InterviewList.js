import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlusCircle, FaEye, FaEdit, FaVideo, FaCalendarAlt } from "react-icons/fa";

// Sample Scheduled Interview Data
const scheduledInterviews = [
  { 
    id: 1, 
    candidate: "SJ Purusothaman", 
    role: "Junior Developer", 
    date: "2025-02-20", 
    time: "10:00 AM", 
    mode: "Online", 
    status: "Scheduled" 
  },
  { 
    id: 2, 
    candidate: "Raksana Banu", 
    role: "Web Designer", 
    date: "2025-02-21", 
    time: "2:30 PM", 
    mode: "In-Person", 
    status: "Completed" 
  },
  { 
    id: 3, 
    candidate: "Sajith", 
    role: "UX Designer", 
    date: "2025-02-22", 
    time: "11:00 AM", 
    mode: "Online", 
    status: "Pending" 
  },
  { 
    id: 4, 
    candidate: "Mohan", 
    role: "Project Manager", 
    date: "2025-02-23", 
    time: "3:00 PM", 
    mode: "In-Person", 
    status: "Scheduled" 
  },
  { 
    id: 5, 
    candidate: "Bhargava", 
    role: "Data Analyst", 
    date: "2025-02-24", 
    time: "9:00 AM", 
    mode: "Online", 
    status: "Cancelled" 
  }
];

const InterviewList = () => {
  const navigate = useNavigate();
  const [interviews, setInterviews] = useState(scheduledInterviews);

  const handleCreateInterviews = () => {
    navigate("/candidate/create");
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 flex justify-center items-start p-8">
      {/* Container */}
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-xl p-8 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center pb-4 border-b bg-black text-white rounded-t-xl px-6 py-4">
          <h2 className="text-2xl font-bold"># Scheduled Interviews</h2>
          {/* Add Interview Button */}
          <button
            className="bg-white text-black py-2 px-6 rounded-lg flex items-center gap-2 shadow-md hover:bg-gray-200 transform hover:scale-105 transition duration-300 ease-in-out"
            onClick={handleCreateInterviews}
          >
            <FaPlusCircle size={18} />
            Add Interview
          </button>
        </div>

        {/* Interview List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {interviews.map((interview) => (
            <div
              key={interview.id}
              className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {interview.candidate}
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                <span className="font-semibold">Role:</span> {interview.role}
              </p>
              <p className="text-gray-600 text-sm mt-1 flex items-center gap-2">
                <FaCalendarAlt size={14} className="text-gray-500" />
                {interview.date} at {interview.time}
              </p>
              <p className="text-gray-600 text-sm mt-1 flex items-center gap-2">
                <FaVideo size={14} className="text-gray-500" />
                <span className="font-semibold">{interview.mode}</span>
              </p>

              {/* Status Badge */}
              <div className={`mt-3 inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                interview.status === "Scheduled" ? "bg-green-100 text-green-800" :
                interview.status === "Completed" ? "bg-blue-100 text-blue-800" :
                interview.status === "Pending" ? "bg-yellow-100 text-yellow-800" :
                "bg-red-100 text-red-800"
              }`}>
                {interview.status}
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between items-center mt-4">
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

export default InterviewList;
