import React from "react";

const PayBillingDetails = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-bold">Pay & Billing Details</h2>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-gray-600">Job Type</label>
          <select className="w-full border rounded px-3 py-2">
            <option>Contractual</option>
            <option>Permanent</option>
          </select>
        </div>
(/*<div>
          <label className="block text-gray-600">Pay Type</label>
          <select className="w-full border rounded px-3 py-2">
            <option>Monthly</option>
            <option>Hourly</option>
          </select>
        </div>*/)
        <div>
          <label className="block text-gray-600">CTC</label>
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

export default PayBillingDetails;
