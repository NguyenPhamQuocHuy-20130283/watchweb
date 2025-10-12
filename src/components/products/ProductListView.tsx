'use client';

import { Product } from '@/types';
import { useState } from 'react';

interface ProductListViewProps {
  product: Product;
}

export default function ProductListView({ product }: ProductListViewProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white rounded-lg shadow-md p-4 flex flex-col md:flex-row gap-4 hover:shadow-lg transition-shadow"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="w-full md:w-48 h-48 relative overflow-hidden rounded-lg flex-shrink-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('${product.productPic}')` }}
        />
        <img
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          src={product.productHover}
          alt={product.productInfo}
        />
        {product.present && (
          <div className="absolute top-2 left-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
            {product.present}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <span className="text-red-500 text-xs font-semibold">{product.productName}</span>
          <h3 className="text-lg font-bold text-gray-800 mt-1 hover:text-red-500 cursor-pointer transition-colors">
            {product.productInfo}
          </h3>
          
          <div className="flex items-center gap-1 mt-2">
            <div className="flex text-yellow-500 text-sm">
              ⭐⭐⭐⭐⭐
            </div>
            <span className="text-gray-500 text-sm">(125 reviews)</span>
          </div>

          <p className="text-gray-600 text-sm mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
          </p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-3">
            <strong className="text-2xl text-gray-800">{product.taxPrice}</strong>
            <s className="text-gray-500">${product.productPrice}</s>
          </div>

          <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors font-semibold">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}