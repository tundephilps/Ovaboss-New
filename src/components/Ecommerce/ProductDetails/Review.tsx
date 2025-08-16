import React from "react";
import { ProductReview } from "../../../types/product.type";
import { formatDate } from "../../../utils";
import { FaStar } from "react-icons/fa";
import useReview from "../../../hooks/useReview";
import Loading from "../../Loading";
import { useAppContext } from "../../../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function ProductReviews({ reviews: allReviews }: { reviews: ProductReview[] }) {
  const [hover, setHover] = React.useState<number | null>(null);
  const [reviews, setReviews] = React.useState(allReviews);

  const { inputs, isLoading, handleInput, handleAddReview } = useReview();
  const { user } = useAppContext();
  const navigate = useNavigate();

  const reviewCallback = () => {
    const newReview: ProductReview = {
      sender: user!.fullName,
      star: inputs.star,
      review: inputs.review,
      createdAt: Date(),
    };

    setReviews(prev => [...prev, newReview])
  }

  const addReview = () => {
    if(user) {
      return handleAddReview(reviewCallback);
    }
    
    navigate('/signin');
  }
  
  const renderStars = (rating: string) => {
    const stars: any[] = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={i <= +rating ? "text-yellow-400" : "text-gray-300"}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <>
      <div className="bg-white p-4 rounded-md shadow-md mx-auto">
        <div className="border-b border-gray-200 pb-2 mb-4">
          <h2 className="font-semibold">Create Review</h2>
        </div>

        <div className="flex items-center space-x-1 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => handleInput('star', String(star))}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(null)}
              className="focus:outline-none"
            >
              <FaStar
                size={22}
                className={`transition-colors ${
                  (hover ?? +inputs.star) >= star ? "text-yellow-400" : "text-gray-300"
                }`}
              />
            </button>
          ))}
        </div>

        <textarea
          id="review"
          name="review"
          rows={5}
          placeholder="Write your review here..."
          className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 resize-none placeholder-gray-400"
          onChange={e => handleInput('review', e.target.value)}
        />

        <div className="mt-6">
          <button onClick={addReview} className="w-full bg-[#FFD700] text-center py-2 text-black font-medium rounded hover:bg-yellow-600 transition-colors">
            {isLoading ? <Loading/> : 'Create'}
          </button>
        </div>
      </div>

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
              {/* <h3 className="font-medium text-lg">{review.title}</h3> */}
              <p className="text-gray-700 mb-1">{review.review}</p>
              <div className="text-sm text-gray-500 mb-1">
                {formatDate(review.createdAt)} by {review.sender}
              </div>
              <div className="flex text-xl">{renderStars(review.star)}</div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <button className="w-full bg-[#FFD700] text-center py-2 text-black font-medium rounded hover:bg-yellow-600 transition-colors">
            View All
          </button>
        </div>
      </div>
    </>
  );
}
