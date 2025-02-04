import React from "react";

const JobDescription = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-bold">Job Description</h2>
      <div>
        <label className="block text-gray-600">Job Domain</label>
        <select className="w-full border rounded px-3 py-2">
          <option>Select Domain</option>
        </select>
      </div>
      <div>
        <label className="block text-gray-600">Job Description *</label>
        <textarea
          rows="4"
          placeholder="Enter job description here"
          className="w-full border rounded px-3 py-2"
        ></textarea>
      </div>
    </div>
  );
};

export default JobDescription;
