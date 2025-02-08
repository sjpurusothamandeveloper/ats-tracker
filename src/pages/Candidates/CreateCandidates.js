import React, { useState } from "react";

const CreateCandidates = () => {
  const [formData, setFormData] = useState({
    Id: "",
    candidateName: "",
    email: "",
    mobileNumber: "",
    experience: "",
    ownership: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobileNumberRegex = /^[0-9]{10}$/;

  const validateForm = () => {
    const newErrors = {};

    if (!formData.Id.trim()) newErrors.Id = "ID is required";
    if (!formData.candidateName.trim())
      newErrors.candidateName = "Candidate Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.mobileNumber.trim())
      newErrors.mobileNumber = "Mobile Number is required";
    else if (!mobileNumberRegex.test(formData.mobileNumber))
      newErrors.mobileNumber = "Mobile Number must be 10 digits";
    if (!formData.experience.trim())
      newErrors.experience = "Experience is required";
    if (!formData.ownership.trim()) newErrors.ownership = "Ownership is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const valid = validateForm();

    if (valid) {
      console.log("Form Data:", formData);
    }
  };

  const handleClear = () => {
    setFormData({
      Id: "",
      candidateName: "",
      email: "",
      mobileNumber: "",
      experience: "",
      ownership: "",
    });
    setErrors({}); // Clear any error messages
  };

  return (
    <div className="w-full h-screen bg-gray-100 flex justify-center items-start p-8">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg p-8 flex flex-col">
        <div className="text-center pb-4 border-b">
          <h2 className="text-2xl font-bold text-gray-900">Add New Candidate</h2>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="border p-4 rounded-lg">
            <h2 className="text-lg font-bold mb-4">Candidate Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Candidate ID */}
              <div>
                <label className="block text-sm font-medium mb-1">ID *</label>
                <input
                  type="text"
                  name="Id"
                  className={`w-full border rounded-lg p-3 ${
                    errors.Id ? "border-red-500" : ""
                  }`}
                  onChange={handleChange}
                  value={formData.Id}
                />
                {errors.Id && <p className="text-red-500 text-sm">{errors.Id}</p>}
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-1">Name *</label>
                <input
                  type="text"
                  name="candidateName"
                  className={`w-full border rounded-lg p-3 ${
                    errors.candidateName ? "border-red-500" : ""
                  }`}
                  onChange={handleChange}
                  value={formData.candidateName}
                />
                {errors.candidateName && (
                  <p className="text-red-500 text-sm">{errors.candidateName}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-1">Email *</label>
                <input
                  type="email"
                  name="email"
                  className={`w-full border rounded-lg p-3 ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  onChange={handleChange}
                  value={formData.email}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-sm font-medium mb-1">Mobile Number *</label>
                <input
                  type="tel"
                  name="mobileNumber"
                  className={`w-full border rounded-lg p-3 ${
                    errors.mobileNumber ? "border-red-500" : ""
                  }`}
                  onChange={handleChange}
                  value={formData.mobileNumber}
                />
                {errors.mobileNumber && (
                  <p className="text-red-500 text-sm">{errors.mobileNumber}</p>
                )}
              </div>

              {/* Experience */}
              <div>
                <label className="block text-sm font-medium mb-1">Experience *</label>
                <input
                  type="text"
                  name="experience"
                  className={`w-full border rounded-lg p-3 ${
                    errors.experience ? "border-red-500" : ""
                  }`}
                  onChange={handleChange}
                  value={formData.experience}
                />
                {errors.experience && (
                  <p className="text-red-500 text-sm">{errors.experience}</p>
                )}
              </div>

              {/* Ownership */}
              <div>
                <label className="block text-sm font-medium mb-1">Ownership *</label>
                <select
                  name="ownership"
                  className={`w-full border rounded-lg p-3 ${
                    errors.ownership ? "border-red-500" : ""
                  }`}
                  onChange={handleChange}
                  value={formData.ownership}
                >
                  <option value="">Select Ownership</option>
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Freelancer">Freelancer</option>
                </select>
                {errors.ownership && (
                  <p className="text-red-500 text-sm">{errors.ownership}</p>
                )}
              </div>
            </div>
          </div>

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

export default CreateCandidates;
