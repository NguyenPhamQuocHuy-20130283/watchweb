'use client';

import { newProducts } from '@/data/dummy';
import ProductCard from '@/components/home/ProductCard';

export default function RecentlyViewed() {
  // Mock recently viewed products
  const recentProducts = newProducts.slice(0, 4);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Recently Viewed</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {recentProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}