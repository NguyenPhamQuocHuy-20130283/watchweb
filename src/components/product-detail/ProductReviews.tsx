'use client';

import { useState } from 'react';
import { Star, ThumbsUp, ThumbsDown } from 'lucide-react';

export default function ProductReviews() {
  const [sortBy, setSortBy] = useState('recent');

  const reviews = [
    {
      id: 1,
      author: 'John Doe',
      rating: 5,
      date: '2024-01-15',
      title: 'Excellent product!',
      content: 'This product exceeded my expectations. The quality is top-notch and it arrived quickly. Highly recommend!',
      helpful: 24,
      notHelpful: 2,
      verified: true,
    },
    {
      id: 2,
      author: 'Jane Smith',
      rating: 4,
      date: '2024-01-10',
      title: 'Good value for money',
      content: 'Overall a great purchase. The only minor issue is that it runs slightly small, so order a size up.',
      helpful: 18,
      notHelpful: 1,
      verified: true,
    },
    {
      id: 3,
      author: 'Mike Johnson',
      rating: 5,
      date: '2024-01-05',
      title: 'Love it!',
      content: 'Perfect fit, great quality. Been using it for a month now and still looks brand new.',
      helpful: 15,
      notHelpful: 0,
      verified: false,
    },
  ];

  const ratingDistribution = [
    { stars: 5, count: 85, percentage: 68 },
    { stars: 4, count: 25, percentage: 20 },
    { stars: 3, count: 10, percentage: 8 },
    { stars: 2, count: 3, percentage: 2 },
    { stars: 1, count: 2, percentage: 2 },
  ];

  const averageRating = 4.7;
  const totalReviews = 125;

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Customer Reviews</h2>

      {/* Rating Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Average Rating */}
        <div className="bg-gray-50 rounded-lg p-6 text-center">
          <div className="text-5xl font-bold text-gray-800 mb-2">{averageRating}</div>
          <div className="flex justify-center text-yellow-500 text-xl mb-2">
            ⭐⭐⭐⭐⭐
          </div>
          <p className="text-gray-600">Based on {totalReviews} reviews</p>
        </div>

        {/* Rating Distribution */}
        <div className="md:col-span-2 bg-gray-50 rounded-lg p-6">
          <div className="space-y-2">
            {ratingDistribution.map(item => (
              <div key={item.stars} className="flex items-center gap-3">
                <span className="text-sm font-semibold w-12">{item.stars} ⭐</span>
                <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-yellow-500 h-full rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
                <span className="text-sm text-gray-600 w-12">{item.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Write Review Button */}
      <div className="mb-6">
        <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors font-semibold">
          Write a Review
        </button>
      </div>

      {/* Sort Options */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-gray-600">Sort by:</span>
        <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded-lg p-2"
        >
            <option value="recent">Most Recent</option>
            <option value="highest">Highest Rating</option>
            <option value="lowest">Lowest Rating</option>
            <option value="helpful">Most Helpful</option>
        </select>
        </div>
        {/* Reviews List */}
        <div className="space-y-8">
        {reviews.map(review => (
            <div key={review.id} className="border-b pb-6">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                <div className="flex text-yellow-500">
                    {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5" />
                    ))}
                    {Array.from({ length: 5 - review.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gray-300" />
                    ))}
                </div>
                <span className="text-sm text-gray-600">{new Date(review.date).toLocaleDateString()}</span>
                </div>
                {review.verified && (
                <span className="text-sm text-green-600 font-semibold">Verified Purchase</span>
                )}
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">{review.title}</h3>
            <p className="text-gray-600 mb-4">{review.content}</p>
            <div className="flex items-center gap-4 text-sm text-gray-600">
                <span>{review.author}</span>
                <span className="flex items-center gap-1">
                <ThumbsUp className="w-4 h-4" /> {review.helpful}
                </span>
                <span className="flex items-center gap-1">
                <ThumbsDown className="w-4 h-4" /> {review.notHelpful}
                </span>
            </div>
            </div>
        ))}
        </div>
    </div>
    );
}
