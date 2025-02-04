import React from "react";

const JobDetails = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-bold">job Details-----</h2>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-gray-600">Job Id *</label>
          <input
            type="text"
            placeholder="OOJ - 1003"
            className="w-full border rounded px-3 py-2"
          />
        </div>
        
        <div>
          <label className="block text-gray-600">Job Title *</label>
          <input
            type="text"
            placeholder="Enter Job Title"
            className="w-full border rounded px-3 py-2"
          />
        </div>
        {/* Add other fields here */}
      </div>
    </div>
  );
};

export default JobDetails;
