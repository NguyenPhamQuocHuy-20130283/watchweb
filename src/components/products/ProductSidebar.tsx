// FILE: components/products/ProductSidebar.tsx
'use client';

interface Filters {
  categories: string[];
  priceRange: [number, number];
  sizes: string[];
  colors: string[];
  brands: string[];
}

interface ProductSidebarProps {
  filters: Filters;
  onToggleFilter: <K extends keyof Filters>(key: K, value: string) => void;
  onPriceChange: (range: [number, number]) => void;
  onClearFilters: () => void;
  isActive: <K extends keyof Filters>(key: K, value: string) => boolean;
}

export default function ProductSidebar({ 
  filters, 
  onToggleFilter, 
  onPriceChange, 
  onClearFilters,
  isActive 
}: ProductSidebarProps) {
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

  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
      {/* Categories */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center justify-between">
          Categories
          {filters.categories.length > 0 && (
            <button 
              onClick={() => filters.categories.forEach(cat => onToggleFilter('categories', cat))}
              className="text-sm text-red-500 hover:text-red-600"
            >
              Clear
            </button>
          )}
        </h3>
        <div className="space-y-3">
          {categories.map(category => (
            <label key={category.id} className="flex items-center justify-between cursor-pointer group">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-red-500 border-gray-300 rounded focus:ring-red-500"
                  checked={isActive('categories', category.id)}
                  onChange={() => onToggleFilter('categories', category.id)}
                />
                <span className="ml-3 text-gray-700 group-hover:text-red-500 transition-colors">
                  {category.name}
                </span>
              </div>
              <span className="text-sm text-gray-400">({category.count})</span>
            </label>
          ))}
        </div>
      </div>

      <hr className="my-6" />

      {/* Price Range */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Price Range</h3>
        <div className="space-y-4">
          <input
            type="range"
            min="0"
            max="1000"
            value={filters.priceRange[1]}
            onChange={(e) => onPriceChange([filters.priceRange[0], parseInt(e.target.value)])}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-500"
          />
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-gray-700">
              ${filters.priceRange[0]}
            </span>
            <span className="text-sm font-semibold text-gray-700">
              ${filters.priceRange[1]}
            </span>
          </div>
        </div>
      </div>

      <hr className="my-6" />

      {/* Sizes */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Size</h3>
        <div className="flex flex-wrap gap-2">
          {sizes.map(size => (
            <button
              key={size}
              onClick={() => onToggleFilter('sizes', size)}
              className={`px-4 py-2 border rounded-lg text-sm font-semibold transition-all ${
                isActive('sizes', size)
                  ? 'bg-red-500 text-white border-red-500'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-red-500'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <hr className="my-6" />

      {/* Colors */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Color</h3>
        <div className="grid grid-cols-4 gap-3">
          {colors.map(color => (
            <button
              key={color.name}
              onClick={() => onToggleFilter('colors', color.name.toLowerCase())}
              className={`w-10 h-10 rounded-full border-2 transition-all ${
                isActive('colors', color.name.toLowerCase())
                  ? 'border-red-500 scale-110 ring-2 ring-red-500 ring-offset-2'
                  : 'border-gray-300 hover:scale-105'
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

      <hr className="my-6" />

      {/* Brands */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Brands</h3>
        <div className="space-y-3">
          {brands.map(brand => (
            <label key={brand} className="flex items-center cursor-pointer group">
              <input
                type="checkbox"
                className="w-4 h-4 text-red-500 border-gray-300 rounded focus:ring-red-500"
                checked={isActive('brands', brand.toLowerCase())}
                onChange={() => onToggleFilter('brands', brand.toLowerCase())}
              />
              <span className="ml-3 text-gray-700 group-hover:text-red-500 transition-colors">
                {brand}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Clear All Filters */}
      <button 
        onClick={onClearFilters}
        className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
      >
        Clear All Filters
      </button>
    </div>
  );
}