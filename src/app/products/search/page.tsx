'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useFilters } from '@/hooks/useFilters';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import ProductCard from '@/components/home/ProductCard';
import ProductSort from '@/components/products/ProductSort';
import ProductSidebar from '@/components/products/ProductSidebar';
import Breadcrumb from '@/components/home/Breadcrumb';
import FilterTags from '@/components/products/FilterTags';
import EmptyState from '@/components/products/EmptyState';
import MobileFilters from '@/components/products/MobileFilters';
import { newProducts } from '@/data/dummy';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter products by search query
  const searchResults = newProducts.filter(product =>
    product.productInfo.toLowerCase().includes(query.toLowerCase()) ||
    product.productName.toLowerCase().includes(query.toLowerCase())
  );

  // Use filters hook
  const { 
    filters, 
    toggleArrayFilter,
    updateFilter,
    clearFilters, 
    isActive,
    filteredProducts 
  } = useFilters(searchResults);

  // Apply sorting
  let sortedProducts = [...filteredProducts];
  if (sortBy === 'price-low') {
    sortedProducts.sort((a, b) => 
      parseFloat(a.taxPrice.replace('$', '')) - parseFloat(b.taxPrice.replace('$', ''))
    );
  } else if (sortBy === 'price-high') {
    sortedProducts.sort((a, b) => 
      parseFloat(b.taxPrice.replace('$', '')) - parseFloat(a.taxPrice.replace('$', ''))
    );
  } else if (sortBy === 'newest') {
    sortedProducts.reverse();
  }

  // Pagination
  const itemsPerPage = 12;
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = sortedProducts.slice(startIndex, endIndex);

  // Active filter tags
  const activeFilterTags = [
    ...filters.categories.map(cat => ({
      id: `cat-${cat}`,
      label: cat,
      type: 'category' as const
    })),
    ...filters.sizes.map(size => ({
      id: `size-${size}`,
      label: `Size: ${size}`,
      type: 'size' as const
    })),
    ...filters.colors.map(color => ({
      id: `color-${color}`,
      label: `Color: ${color}`,
      type: 'color' as const
    })),
    ...filters.brands.map(brand => ({
      id: `brand-${brand}`,
      label: `Brand: ${brand}`,
      type: 'brand' as const
    }))
  ];

  const handleRemoveFilter = (filterId: string) => {
    const [type, value] = filterId.split('-');
    if (type === 'cat') toggleArrayFilter('categories', value);
    if (type === 'size') toggleArrayFilter('sizes', value);
    if (type === 'color') toggleArrayFilter('colors', value);
    if (type === 'brand') toggleArrayFilter('brands', value);
  };

  const handleClearAllFilters = () => {
    clearFilters();
    setCurrentPage(1);
  };

  return (
    <>

          <Breadcrumb 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Search Results', href: `/products/search?q=${query}` }
            ]} 
          />



          <h1 className="text-3xl font-bold text-gray-800">
            Search Results for "{query}"
          </h1>
          <p className="text-gray-600 mt-2">
            Found {sortedProducts.length} products in search results
            {filteredProducts.length !== searchResults.length && 
              ` (${filteredProducts.length} after filters)`
            }
          </p>


        {/* Main Content with Sidebar */}
        <div className="mb-20">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar - Desktop Only */}
            <aside className="hidden lg:block w-full lg:w-1/4">
              <ProductSidebar 
                filters={filters}
                onToggleFilter={toggleArrayFilter}
                onPriceChange={(range) => updateFilter('priceRange', range)}
                onClearFilters={handleClearAllFilters}
                isActive={isActive}
              />
            </aside>

            {/* Products Grid */}
            <div className="w-full lg:w-3/4">
              {/* Active Filters */}
              {activeFilterTags.length > 0 && (
                <FilterTags
                  filters={activeFilterTags}
                  onRemove={handleRemoveFilter}
                  onClearAll={handleClearAllFilters}
                />
              )}

              {/* Sort & View Options */}
              <ProductSort 
                viewMode={viewMode} 
                onViewModeChange={setViewMode}
                sortBy={sortBy}
                onSortChange={setSortBy}
              />

              {/* Products List */}
              {currentProducts.length === 0 ? (
                <EmptyState onClearFilters={handleClearAllFilters} />
              ) : (
                <div className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6'
                    : 'flex flex-col gap-6'
                }>
                  {currentProducts.map((product, index) => (
                    <ProductCard key={index} product={product} href={`/products/detail/${product.id}`} />
                  ))}
                </div>
              )}

              {/* Pagination */}
              {currentProducts.length > 0 && totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 border rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed font-semibold transition-colors"
                  >
                    Previous
                  </button>
                  
                  {[...Array(Math.min(totalPages, 5))].map((_, i) => {
                    let pageNum;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }

                    return (
                      <button
                        key={i}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                          currentPage === pageNum
                            ? 'bg-red-500 text-white'
                            : 'border hover:bg-gray-100'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                  
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 border rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed font-semibold transition-colors"
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>


      {/* Mobile Filters */}
      <MobileFilters 
        filters={filters}
        onToggleFilter={toggleArrayFilter}
        onPriceChange={(range) => updateFilter('priceRange', range)}
        onClearFilters={handleClearAllFilters}
        isActive={isActive}
      />
    </>
  );
}