import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // ✅ Dummy user data
  const user = {
    name: "Himanshu Gupta",
    email: "geekyhim@gmail.com",
    joined: "January 2025",
    profilePic: "https://avatars.githubusercontent.com/u/9919?v=4", // placeholder image
  };

  // ✅ Dummy stats data
  const stats = [
    { title: "My Properties", count: 3, color: "bg-blue-100 text-blue-700" },
    { title: "My Reviews", count: 5, color: "bg-yellow-100 text-yellow-700" },
    { title: "Messages", count: 2, color: "bg-green-100 text-green-700" },
  ];

  // ✅ Dummy recent activities
  const activities = [
    {
      id: 1,
      action: "Added new property: Modern 2BHK Apartment",
      date: "November 2, 2025",
    },
    {
      id: 2,
      action: "Posted a review for Luxury Villa, Gurugram",
      date: "October 25, 2025",
    },
    {
      id: 3,
      action: "Updated contact information",
      date: "October 12, 2025",
    },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-blue-600">👤 User Dashboard</h1>
        <Link
          to="/"
          className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white"
        >
          ⬅ Back to Home
        </Link>
      </div>

      {/* User Info */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 mb-8 flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <img
          src={user.profilePic}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover shadow-md"
        />
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-500 text-sm mt-1">Member since {user.joined}</p>

          <div className="mt-4 flex gap-3">
            <Link
              to="/propertylist"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium"
            >
              🏡 View My Properties
            </Link>
            <Link
              to="/review"
              className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-medium"
            >
              ✍️ Write a Review
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        {stats.map((s, i) => (
          <div
            key={i}
            className={`rounded-xl shadow-md p-6 text-center font-semibold ${s.color}`}
          >
            <p className="text-4xl mb-2">{s.count}</p>
            <p>{s.title}</p>
          </div>
        ))}
      </div>

      {/* Activity Section */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🕓 Recent Activity</h2>
        {activities.map((a) => (
          <div
            key={a.id}
            className="border-b border-gray-200 pb-3 mb-3 last:border-none last:mb-0"
          >
            <p className="text-gray-800">{a.action}</p>
            <p className="text-sm text-gray-500">{a.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
