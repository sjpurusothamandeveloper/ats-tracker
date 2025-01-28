import React, { useState } from "react";

// Sample data for candidates (previously products)
const sampleProducts = [
  { id: 1, name: "saru", description: "This is the description for Junior Developer job.", count: 5, position:"junior software developer" },
  { id: 2, name: "pooja", description: "This is the description for Web Designing job.", count:1, position:"web designing"},
  { id: 3, name: "shubha", description: "This is the description for UX Designing job.", count:5,position:"ux designing"},
  // Add more candidates as needed
];

const ListCandidate = () => {
  const [formData, setFormData] = useState({});
  const [products, setProducts] = useState(sampleProducts);

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
        <h2 className="text-lg font-bold mb-4">Candidate List</h2>
      </div>
      
      {/* Add Product Button (Updated color to black) */}
      <div className="flex justify-end mb-6">
        <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition duration-300 ease-in-out">
          + Add Candidate
        </button>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 gap-6 mt-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            {/* Card Content */}
            <div className="flex justify-between items-center p-4 border-b">
              {/* Job Name (Left Side) */}
              <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
              
              {/* Job Count (Center) */}
              <div className="text-lg text-gray-600">{product.position
                }</div>
              
              {/* Buttons (Right Side) */}
              <div className="flex space-x-4">
                {/* View Button (Small size) */}
                <button className="bg-black text-white py-1 px-3 text-sm rounded hover:bg-gray-800 transition duration-300 ease-in-out">
                  View
                </button>
                
                {/* Edit Button (Small size) */}
                <button className="bg-black text-white py-1 px-3 text-sm rounded hover:bg-gray-800 transition duration-300 ease-in-out">
                  Edit
                </button>
              </div>
            </div>
            {/* Card Description */}
            {/* <div className="p-4">
              <p className="text-gray-600">{product.description}</p>
            </div> */}
          </div>
        ))}
      </div>
    </form>
  );
};

export default ListCandidate;
