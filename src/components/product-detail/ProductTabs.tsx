'use client';

import { useState } from 'react';
import { Product } from '@/types';
import ProductReviews from './ProductReviews';
import ProductInfo from './ProductInfo';

interface ProductTabsProps {
  product: Product;
}

export default function ProductTabs({ product }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="bg-white rounded-lg shadow-md mt-8">
      {/* Tab Headers */}
      <div className="border-b flex overflow-x-auto">
        <button
          onClick={() => setActiveTab('description')}
          className={`px-6 py-4 font-semibold whitespace-nowrap transition-colors ${
            activeTab === 'description'
              ? 'text-red-500 border-b-2 border-red-500'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab('specifications')}
          className={`px-6 py-4 font-semibold whitespace-nowrap transition-colors ${
            activeTab === 'specifications'
              ? 'text-red-500 border-b-2 border-red-500'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          Specifications
        </button>
        <button
          onClick={() => setActiveTab('reviews')}
          className={`px-6 py-4 font-semibold whitespace-nowrap transition-colors ${
            activeTab === 'reviews'
              ? 'text-red-500 border-b-2 border-red-500'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          Reviews (125)
        </button>
        <button
          onClick={() => setActiveTab('shipping')}
          className={`px-6 py-4 font-semibold whitespace-nowrap transition-colors ${
            activeTab === 'shipping'
              ? 'text-red-500 border-b-2 border-red-500'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          Shipping & Returns
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-8">
        {activeTab === 'description' && <ProductInfo product={product} />}
        
        {activeTab === 'specifications' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Technical Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-bold text-gray-800 mb-3">General</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Brand:</span>
                    <span className="font-semibold">WatchWeb</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Model:</span>
                    <span className="font-semibold">WW-2024-001</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Color:</span>
                    <span className="font-semibold">Black</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-bold text-gray-800 mb-3">Materials</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Outer:</span>
                    <span className="font-semibold">Genuine Leather</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Lining:</span>
                    <span className="font-semibold">Polyester</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Hardware:</span>
                    <span className="font-semibold">Metal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'reviews' && <ProductReviews />}
        
        {activeTab === 'shipping' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Shipping & Returns</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Shipping Information</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Free standard shipping on orders over $50</li>
                  <li>• Express shipping available for $9.99</li>
                  <li>• International shipping available</li>
                  <li>• Orders ship within 1-2 business days</li>
                  <li>• Tracking number provided for all orders</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Return Policy</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 30-day money-back guarantee</li>
                  <li>• Items must be in original condition with tags</li>
                  <li>• Free return shipping for defective items</li>
                  <li>• Refunds processed within 5-7 business days</li>
                  <li>• Easy online return process</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}