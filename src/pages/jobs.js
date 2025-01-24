import React, { useState } from "react";

const Jobs = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <form className="p-6 space-y-6" onSubmit={handleSubmit}>
      {/* Job Details Section */}
      <div className="border p-4 rounded-lg">
        <h2 className="text-lg font-bold mb-4">Job Details</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Job ID *</label>
            <input
              type="text"
              name="jobId"
              className="w-full border rounded-lg p-2 mt-1"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Status *</label>
            <select
              name="status"
              className="w-full border rounded-lg p-2 mt-1"
              onChange={handleChange}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          {/* Additional fields... */}
        </div>
      </div>

      {/* Pay & Billing Details Section */}
      <div className="border p-4 rounded-lg">
        <h2 className="text-lg font-bold mb-4">Pay & Billing Details</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Job Type</label>
            <select
              name="jobType"
              className="w-full border rounded-lg p-2 mt-1"
              onChange={handleChange}
            >
              <option value="Contractual">Contractual</option>
              <option value="Permanent">Permanent</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Pay Type</label>
            <select
              name="payType"
              className="w-full border rounded-lg p-2 mt-1"
              onChange={handleChange}
            >
              <option value="Monthly">Monthly</option>
              <option value="Hourly">Hourly</option>
            </select>
          </div>
          {/* Additional fields... */}
        </div>
      </div>

      {/* Recruitment Team Section */}
      <div className="border p-4 rounded-lg">
        <h2 className="text-lg font-bold mb-4">Recruitment Team</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Recruiters</label>
            <select
              name="recruiters"
              className="w-full border rounded-lg p-2 mt-1"
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="John Doe">John Doe</option>
              <option value="Jane Smith">Jane Smith</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Account Manager</label>
            <input
              type="text"
              name="accountManager"
              className="w-full border rounded-lg p-2 mt-1"
              onChange={handleChange}
            />
          </div>
          {/* Additional fields... */}
        </div>
      </div>

      {/* Job Description Section */}
      <div className="border p-4 rounded-lg">
        <h2 className="text-lg font-bold mb-4">Job Description</h2>
        <textarea
          name="jobDescription"
          className="w-full border rounded-lg p-2 mt-1"
          rows="4"
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default Jobs;