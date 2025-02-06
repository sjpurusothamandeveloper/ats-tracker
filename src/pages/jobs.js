import React, { useState } from "react";

const Jobs = () => {
  // State to hold form data and validation errors
  const [formData, setFormData] = useState({
    jobTitle: "",
    jobId: "",
    salaryRange: "",
    jobDescription: "",
  });
  const [errors, setErrors] = useState({});

  // Function to handle change in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error when user types
  };

  // Function to validate form
  const validateForm = () => {
    let newErrors = {};
    if (!formData.jobTitle) newErrors.jobTitle = true;
    if (!formData.jobId) newErrors.jobId = true;
    if (!formData.salaryRange) newErrors.salaryRange = true;
    if (!formData.jobDescription) newErrors.jobDescription = true;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data:", formData);
    }
  };

  // Function to handle clearing the form
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
    <div className="max-w-4xl mx-auto p-6">
      {/* Header Section */}
      <header className="bg-gray-100 py-6 shadow mb-6">
        <div className="flex justify-center items-center">
          <div className="w-full">
            <label className="block text-lg font-bold mb-2">Job Title *</label>
            <input
              type="text"
              name="jobTitle"
              placeholder="Enter Job Title"
              className={`w-full border-none rounded-lg p-3 ${errors.jobTitle ? "border-red-500" : ""}`}
              onChange={handleChange}
            />
          </div>
        </div>
      </header>

      {/* Form Section */}
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Job Details Section */}
        <div className="border p-4 rounded-lg">
          <h2 className="text-lg font-bold mb-4">Job Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Job Id *</label>
              <input
                type="text"
                name="jobId"
                className={`w-full border-none rounded-lg p-3 ${errors.jobId ? "border-red-500" : ""}`}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Salary Range *</label>
              <input
                type="text"
                name="salaryRange"
                placeholder="Enter Salary Range (e.g., $50,000 - $70,000)"
                className={`w-full border-none rounded-lg p-3 ${errors.salaryRange ? "border-red-500" : ""}`}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Job Description Section */}
        <div className="border p-4 rounded-lg">
          <h2 className="text-lg font-bold mb-4">Job Description *</h2>
          <textarea
            name="jobDescription"
            className={`w-full border-none rounded-lg p-3 ${errors.jobDescription ? "border-red-500" : ""}`}
            rows="4"
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Button Section */}
        <div className="flex justify-center space-x-4">
          {/* Save Button */}
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            Save
          </button>

          {/* Clear Button */}
          <button
            type="button"
            onClick={handleClear}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default Jobs;
