import React, { useState } from "react";
import { Link } from "react-router-dom";

const Review = () => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`⭐ ${rating} Star Review Submitted:\n"${review}"`);
    setReview("");
    setRating(0);
  };

  return (
    <div className="p-8 max-w-3xl mx-auto bg-white shadow-md rounded-xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-blue-600">✍️ Write a Review</h1>
        <Link
          to="/propertylist"
          className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 text-gray-700"
        >
          ⬅ Back to Property
        </Link>
      </div>

      <form onSubmit={handleSubmit}>
        <label className="block text-gray-700 font-medium mb-2">
          Rating (1–5):
        </label>
        <input
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full mb-4 focus:outline-blue-500"
        />

        <label className="block text-gray-700 font-medium mb-2">
          Review:
        </label>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Write your review here..."
          rows="5"
          className="border border-gray-300 rounded-lg p-3 w-full mb-4 focus:outline-blue-500"
        />

        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default Review;
