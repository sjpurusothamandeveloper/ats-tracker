import React, { useState } from "react";

const Interviews = () => {
  const [formData, setFormData] = useState({
    title: "", 
    interviewStartDate: "",
    interviewEndDate: "",
    interviewTime: "",
    hr: "",
    interviewPanel: []
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const hrOptions = ["Alice", "Bob", "Charlie"];
  const panelOptions = ["David", "Eve", "Frank", "Grace"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePanelChange = (e) => {
    const selectedValues = Array.from(e.target.selectedOptions, (option) => option.value);
    setFormData({ ...formData, interviewPanel: selectedValues });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.title) newErrors.title = true;
    if (!formData.interviewStartDate) newErrors.interviewStartDate = true;
    if (!formData.interviewEndDate) newErrors.interviewEndDate = true;
    if (!formData.interviewTime) newErrors.interviewTime = true;
    if (!formData.hr) newErrors.hr = true;
    if (formData.interviewPanel.length === 0) newErrors.interviewPanel = true;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      console.log("Form Data:", formData);
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <label className="text-lg font-bold">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            className={`w-full border p-3 shadow-sm rounded-lg ${errors.title ? "border-red-500" : "border-gray-300"}`}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-4">
          <label className="text-lg font-bold">Interview Start Date</label>
          <input
            type="date"
            name="interviewStartDate"
            value={formData.interviewStartDate}
            className={`w-full border p-3 shadow-sm rounded-lg ${errors.interviewStartDate ? "border-red-500" : "border-gray-300"}`}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-4">
          <label className="text-lg font-bold">Interview End Date</label>
          <input
            type="date"
            name="interviewEndDate"
            value={formData.interviewEndDate}
            className={`w-full border p-3 shadow-sm rounded-lg ${errors.interviewEndDate ? "border-red-500" : "border-gray-300"}`}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-4">
          <label className="text-lg font-bold">Interview Time</label>
          <input
            type="time"
            name="interviewTime"
            value={formData.interviewTime}
            className={`w-full border p-3 shadow-sm rounded-lg ${errors.interviewTime ? "border-red-500" : "border-gray-300"}`}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-4">
          <label className="text-lg font-bold">HR</label>
          <select
            name="hr"
            value={formData.hr}
            className={`w-full border p-3 shadow-sm rounded-lg ${errors.hr ? "border-red-500" : "border-gray-300"}`}
            onChange={handleChange}
          >
            <option value="">Select HR</option>
            {hrOptions.map((hr) => (
              <option key={hr} value={hr}>{hr}</option>
            ))}
          </select>
        </div>

        <div className="space-y-4">
          <label className="text-lg font-bold">Interview Panel</label>
          <select
            name="interviewPanel"
            multiple
            value={formData.interviewPanel}
            className={`w-full border p-3 shadow-sm rounded-lg ${errors.interviewPanel ? "border-red-500" : "border-gray-300"}`}
            onChange={handlePanelChange}
          >
            {panelOptions.map((panelist) => (
              <option key={panelist} value={panelist}>{panelist}</option>
            ))}
          </select>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            {isSubmitting ? "Submitting..." : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Interviews;
