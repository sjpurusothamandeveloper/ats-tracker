import React from "react";
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  BarChart, Bar, Legend 
} from "recharts";
import { FaUsers, FaShoppingCart, FaDollarSign, FaChartLine } from "react-icons/fa";

// Sample Data for Charts
const lineChartData = [
  { name: "Jan", users: 400 },
  { name: "Feb", users: 700 },
  { name: "Mar", users: 600 },
  { name: "Apr", users: 900 },
  { name: "May", users: 800 },
  { name: "Jun", users: 1200 },
];

const barChartData = [
  { name: "Product A", sales: 2400 },
  { name: "Product B", sales: 1398 },
  { name: "Product C", sales: 9800 },
  { name: "Product D", sales: 3908 },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Welcome to Dashboard
      </h2>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {/* Users */}
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4">
          <FaUsers className="text-blue-600 text-3xl" />
          <div>
            <h4 className="text-lg font-semibold">Total Candidates</h4>
            <p className="text-gray-600 text-xl font-bold">12,345</p>
          </div>
        </div>

        {/* Orders */}
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4">
          <FaShoppingCart className="text-green-600 text-3xl" />
          <div>
            <h4 className="text-lg font-semibold">Total Placed</h4>
            <p className="text-gray-600 text-xl font-bold">8,760</p>
          </div>
        </div>

        {/* Revenue */}
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4">
          <FaDollarSign className="text-yellow-500 text-3xl" />
          <div>
            <h4 className="text-lg font-semibold">Revenue</h4>
            <p className="text-gray-600 text-xl font-bold">$125K</p>
          </div>
        </div>

        {/* Growth */}
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4">
          <FaChartLine className="text-purple-600 text-3xl" />
          <div>
            <h4 className="text-lg font-semibold">Growth Rate</h4>
            <p className="text-gray-600 text-xl font-bold">+15%</p>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Line Chart */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">User Growth</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={lineChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="#4F46E5" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Sales Overview</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={barChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
