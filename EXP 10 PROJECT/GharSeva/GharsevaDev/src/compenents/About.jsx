import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-blue-600">ℹ️ About Us</h1>
        <Link
          to="/"
          className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white"
        >
          ⬅ Back to Home
        </Link>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Welcome to GharSeva 🏠
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          GharSeva is a modern property management and rental platform designed
          to simplify the way you find, list, and manage properties. Whether you
          are a tenant searching for a cozy home or an owner looking to rent out
          your property, GharSeva makes the process smooth, secure, and
          efficient.
        </p>

        <h3 className="text-xl font-semibold text-blue-600 mt-6 mb-2">
          💡 Our Mission
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Our mission is to bridge the gap between property owners and tenants
          through transparency, trust, and technology. We aim to create a
          digital ecosystem that empowers users to make informed decisions with
          just a few clicks.
        </p>

        <h3 className="text-xl font-semibold text-blue-600 mt-6 mb-2">
          🚀 What We Offer
        </h3>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>Verified property listings across multiple cities</li>
          <li>Detailed property insights with pricing and location details</li>
          <li>Secure user authentication and easy profile management</li>
          <li>Search and filter system for personalized property discovery</li>
          <li>Review system to ensure transparency and credibility</li>
        </ul>

        <h3 className="text-xl font-semibold text-blue-600 mt-6 mb-2">
          👨‍💻 Our Vision
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          We envision a future where finding a home is not stressful but
          exciting — a process that combines technology and human trust. GharSeva
          is built by passionate engineers and designers who believe in
          simplifying real-world problems using smart, user-first design.
        </p>

        <h3 className="text-xl font-semibold text-blue-600 mt-6 mb-2">
          📍 Contact Us
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Have questions or suggestions? We’d love to hear from you!
          <br />
          <span className="font-medium">Email:</span> support@gharseva.in
          <br />
          <span className="font-medium">Address:</span> Chandigarh University, Punjab, India
        </p>

        {/* CTA Section */}
        <div className="mt-8 flex gap-4">
          <Link
            to="/"
            className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium"
          >
            🏡 View Properties
          </Link>
          <Link
            to="/review"
            className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-medium"
          >
            ✍️ Leave a Review
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
