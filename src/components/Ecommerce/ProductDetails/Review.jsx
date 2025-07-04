import React from "react";

export default function ProductReviews() {
  const reviews = [
    {
      title: "quality product",
      content: "More comfort to use and carry about",
      date: "13-03-2025",
      author: "Kenny Robert",
      rating: 4,
    },
    {
      title: "Great device",
      content: "Comfortable, classy and stylish",
      date: "13-03-2025",
      author: "Joy",
      rating: 4,
    },
    {
      title: "I like it",
      content: "It's of good quality... exactly what I expected.",
      date: "13-03-2025",
      author: "Joy",
      rating: 4,
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={i <= rating ? "text-yellow-400" : "text-gray-300"}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md mx-auto">
      <div className="border-b border-gray-200 pb-2 mb-4">
        <h2 className="font-semibold">Reviews</h2>
      </div>

      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div
            key={index}
            className={
              index !== reviews.length - 1
                ? "pb-4 border-b border-gray-200"
                : ""
            }
          >
            <h3 className="font-medium text-lg">{review.title}</h3>
            <p className="text-gray-700 mb-1">{review.content}</p>
            <div className="text-sm text-gray-500 mb-1">
              {review.date} by {review.author}
            </div>
            <div className="flex text-xl">{renderStars(review.rating)}</div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <button className="w-full bg-[#FFD700] text-center py-2 text-black font-medium rounded hover:bg-yellow-600 transition-colors">
          View All
        </button>
      </div>
    </div>
  );
}
