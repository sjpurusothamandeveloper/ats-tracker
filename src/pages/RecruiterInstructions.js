import React from "react";

const RecruiterInstructions = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-bold">Recruiter Instructions</h2>
      <div>
        <label className="block text-gray-600">Instructions</label>
        <textarea
          rows="4"
          placeholder="Enter recruiter instructions here"
          className="w-full border rounded px-3 py-2"
        ></textarea>
      </div>
      <div>
        <label className="block text-gray-600">Attachments</label>
        <input type="file" className="w-full border rounded px-3 py-2" />
      </div>
    </div>
  );
};

export default RecruiterInstructions;
