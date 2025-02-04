import React from "react";

const RecruitmentTeam = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-bold">Recruitment Team</h2>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-gray-600">Recruiters *</label>
          <select className="w-full border rounded px-3 py-2">
            <option>Select Recruiter</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-600">Account Manager</label>
          <input
            type="text"
            placeholder="Sriram S"
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-gray-600">Maximum Submissions</label>
          <input
            type="number"
            placeholder="0"
            className="w-full border rounded px-3 py-2"
          />
        </div>
      </div>
    </div>
  );
};

export default RecruitmentTeam;
