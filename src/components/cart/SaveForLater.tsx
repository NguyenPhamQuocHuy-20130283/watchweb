'use client';

import { useState } from 'react';
import { CartItem } from '@/types';

interface SaveForLaterProps {
  items: CartItem[];
  onMoveToCart: (item: CartItem) => void;
  onRemove: (id: number) => void;
}

export default function SaveForLater({ items, onMoveToCart, onRemove }: SaveForLaterProps) {
  if (items.length === 0) return null;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">
        Saved for Later ({items.length})
      </h2>
      
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex gap-4 p-4 border rounded-lg">
            <img
              src={item.productPic}
              alt={item.productInfo}
              className="w-24 h-24 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">{item.productInfo}</h3>
              <p className="text-sm text-gray-600 mt-1">{item.productName}</p>
              <div className="font-bold text-gray-800 mt-2">
                ${item.price}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => onMoveToCart(item)}
                className="px-4 py-2 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition-colors"
              >
                Move to Cart
              </button>
              <button
                onClick={() => onRemove(item.id)}
                className="px-4 py-2 border text-gray-700 text-sm rounded-lg hover:bg-gray-100 transition-colors"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
