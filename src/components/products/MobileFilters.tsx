// FILE: components/products/MobileFilters.tsx
'use client';

import { useState } from 'react';

interface Filters {
  categories: string[];
  priceRange: [number, number];
  sizes: string[];
  colors: string[];
  brands: string[];
}

interface MobileFiltersProps {
  filters: Filters;
  onToggleFilter: <K extends keyof Filters>(key: K, value: string) => void;
  onPriceChange: (range: [number, number]) => void;
  onClearFilters: () => void;
  isActive: <K extends keyof Filters>(key: K, value: string) => boolean;
}

export default function MobileFilters({
  filters,
  onToggleFilter,
  onPriceChange,
  onClearFilters,
  isActive
}: MobileFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    { id: 'jacket', name: 'Jacket', count: 12 },
    { id: 'shirt', name: 'Shirt', count: 24 },
    { id: 'shoes', name: 'Shoes', count: 18 },
    { id: 'watch', name: 'Watch', count: 8 },
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  
  const colors = [
    { name: 'Red', hex: '#EF4444' },
    { name: 'Blue', hex: '#3B82F6' },
    { name: 'Green', hex: '#10B981' },
    { name: 'Black', hex: '#000000' },
    { name: 'White', hex: '#FFFFFF' },
    { name: 'Yellow', hex: '#F59E0B' },
  ];

  const brands = ['Nike', 'Adidas', 'Puma', 'Reebok'];

  const handleApply = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Filter Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed bottom-20 right-4 bg-red-500 text-white p-4 rounded-full shadow-lg z-20 hover:bg-red-600 transition-colors"
      >
        <span className="text-xl">⚙️</span>
      </button>

      {/* Mobile Filter Sidebar */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-30"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-0 right-0 w-80 h-full bg-white z-40 overflow-y-auto shadow-2xl animate-slideInRight">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-800">Filters</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-red-500 text-2xl"
                >
                  ✕
                </button>
              </div>
              
              {/* Categories */}
              <div className="mb-6">
                <h3 className="text-md font-bold text-gray-800 mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <label key={category.id} className="flex items-center justify-between cursor-pointer">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-red-500 border-gray-300 rounded"
                          checked={isActive('categories', category.id)}
                          onChange={() => onToggleFilter('categories', category.id)}
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          {category.name}
                        </span>
                      </div>
                      <span className="text-xs text-gray-400">({category.count})</span>
                    </label>
                  ))}
                </div>
              </div>

              <hr className="my-4" />

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="text-md font-bold text-gray-800 mb-3">Price Range</h3>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={filters.priceRange[1]}
                  onChange={(e) => onPriceChange([filters.priceRange[0], parseInt(e.target.value)])}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-500"
                />
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm font-semibold text-gray-700">
                    ${filters.priceRange[0]}
                  </span>
                  <span className="text-sm font-semibold text-gray-700">
                    ${filters.priceRange[1]}
                  </span>
                </div>
              </div>

              <hr className="my-4" />

              {/* Sizes */}
              <div className="mb-6">
                <h3 className="text-md font-bold text-gray-800 mb-3">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => onToggleFilter('sizes', size)}
                      className={`px-3 py-1 border rounded-lg text-sm font-semibold transition-all ${
                        isActive('sizes', size)
                          ? 'bg-red-500 text-white border-red-500'
                          : 'bg-white text-gray-700 border-gray-300'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <hr className="my-4" />

              {/* Colors */}
              <div className="mb-6">
                <h3 className="text-md font-bold text-gray-800 mb-3">Color</h3>
                <div className="grid grid-cols-4 gap-2">
                  {colors.map(color => (
                    <button
                      key={color.name}
                      onClick={() => onToggleFilter('colors', color.name.toLowerCase())}
                      className={`w-10 h-10 rounded-full border-2 transition-all ${
                        isActive('colors', color.name.toLowerCase())
                          ? 'border-red-500 scale-110'
                          : 'border-gray-300'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    >
                      {color.hex === '#FFFFFF' && (
                        <div className="w-full h-full rounded-full border border-gray-200" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <hr className="my-4" />

              {/* Brands */}
              <div className="mb-6">
                <h3 className="text-md font-bold text-gray-800 mb-3">Brands</h3>
                <div className="space-y-2">
                  {brands.map(brand => (
                    <label key={brand} className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-red-500 border-gray-300 rounded"
                        checked={isActive('brands', brand.toLowerCase())}
                        onChange={() => onToggleFilter('brands', brand.toLowerCase())}
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        {brand}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <button
                  onClick={handleApply}
                  className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors font-semibold"
                >
                  Apply Filters
                </button>
                <button
                  onClick={() => {
                    onClearFilters();
                    setIsOpen(false);
                  }}
                  className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
                >
                  Clear All
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}