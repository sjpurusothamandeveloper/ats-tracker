import React, { useState } from "react";

const Jobs = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    jobId: "",
    salaryRange: "",
    jobDescription: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.jobTitle) newErrors.jobTitle = true;
    if (!formData.jobId) newErrors.jobId = true;
    if (!formData.salaryRange) newErrors.salaryRange = true;
    if (!formData.jobDescription) newErrors.jobDescription = true;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data:", formData);
    }
  };

  const handleClear = () => {
    setFormData({
      jobTitle: "",
      jobId: "",
      salaryRange: "",
      jobDescription: "",
    });
    setErrors({});
  };

  return (
    <div className="w-full h-screen bg-gray-100 flex justify-center items-start p-8">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg p-8 flex flex-col">
        {/* Page Title */}
        <div className="text-center pb-4 border-b">
          <h2 className="text-2xl font-bold text-gray-900">Add New Job</h2>
        </div>

        {/* Form Section */}
        <form className="space-y-6 mt-6" onSubmit={handleSubmit}>
          {/* Job Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Job Title *
            </label>
            <input
              type="text"
              name="jobTitle"
              placeholder="Enter Job Title"
              className={`w-full border rounded-md px-3 py-2 text-sm ${
                errors.jobTitle ? "border-red-500" : "border-gray-300"
              }`}
              onChange={handleChange}
            />
          </div>

          {/* Job Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Job ID *
              </label>
              <input
                type="text"
                name="jobId"
                placeholder="Enter Job ID"
                className={`w-full border rounded-md px-3 py-2 text-sm ${
                  errors.jobId ? "border-red-500" : "border-gray-300"
                }`}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Salary Range *
              </label>
              <input
                type="text"
                name="salaryRange"
                placeholder="Enter Salary (e.g., $50,000 - $70,000)"
                className={`w-full border rounded-md px-3 py-2 text-sm ${
                  errors.salaryRange ? "border-red-500" : "border-gray-300"
                }`}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Job Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Job Description *
            </label>
            <textarea
              name="jobDescription"
              rows="3"
              placeholder="Enter job description"
              className={`w-full border rounded-md px-3 py-2 text-sm ${
                errors.jobDescription ? "border-red-500" : "border-gray-300"
              }`}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex justify-center space-x-4">
            <button
              type="submit"
              className="bg-black text-white px-5 py-2 rounded-md shadow-md hover:bg-gray-900 transform hover:scale-105 transition duration-300 text-sm"
            >
              Save
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="bg-gray-500 text-white px-5 py-2 rounded-md shadow-md hover:bg-gray-600 transition duration-300 text-sm"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Jobs;
