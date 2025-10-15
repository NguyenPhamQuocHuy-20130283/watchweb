'use client';
import { useProducts } from '@/hooks/useProducts';
import { useFilters } from '@/hooks/useFilters';
import { useState } from 'react';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import ProductCard from '@/components/home/ProductCard';
import ProductSidebar from '@/components/products/ProductSidebar';
import ProductSort from '@/components/products/ProductSort';
import Breadcrumb from '@/components/home/Breadcrumb';
import FilterTags from '@/components/products/FilterTags';
import EmptyState from '@/components/products/EmptyState';
import LoadingSkeleton from '@/components/products/LoadingSkeleton';
import MobileFilters from '@/components/products/MobileFilters';
import QuickView from '@/components/products/QuickView';
import { newProducts } from '@/data/dummy';
import { Product } from '@/types';

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<string>('default');
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeFilters, setActiveFilters] = useState<any[]>([]);

   const { products } = useProducts();
  const { filters, addFilter, removeFilter, clearFilters, filteredProducts,toggleArrayFilter,updateFilter, isActive } = useFilters(products);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(newProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = newProducts.slice(startIndex, endIndex);
  

  const handleRemoveFilter = (filterId: string) => {
    setActiveFilters(prev => prev.filter(f => f.id !== filterId));
  };

  const handleClearAllFilters = () => {
    setActiveFilters([]);
  };

  return (
    <>
        {/* Breadcrumb */}
  
          <Breadcrumb 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Products', href: '/products' }
            ]} 
          />


        {/* Page Title */}

          <h1 className="text-3xl font-bold text-gray-800">All Products</h1>
          <p className="text-gray-600 mt-2">
            Showing {startIndex + 1}-{Math.min(endIndex, newProducts.length)} of {newProducts.length} results
          </p>


        {/* Main Content */}
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
              {activeFilters.length > 0 && (
                <FilterTags
                  filters={activeFilters}
                  onRemove={handleRemoveFilter}
                  onClearAll={handleClearAllFilters}
                />
              )}

              {/* Sort & View Options */}
              <ProductSort viewMode={viewMode} onViewModeChange={setViewMode}
              sortBy={sortBy} onSortChange={setSortBy} />
              
              {/* Products List */}
              {loading ? (
                <LoadingSkeleton />
              ) : currentProducts.length === 0 ? (
                <EmptyState />
              ) : (
                <div className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6'
                    : 'flex flex-col gap-6'
                }>
                  {currentProducts.map((product, index) => (
                    <div key={index} onClick={() => setSelectedProduct(product)}>
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              )}

              {/* Pagination */}
              {!loading && currentProducts.length > 0 && (
                <div className="flex justify-center items-center gap-2 mt-10">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 border rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
                  >
                    Previous
                  </button>
                  
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`px-4 py-2 rounded-lg font-semibold ${
                        currentPage === i + 1
                          ? 'bg-red-500 text-white'
                          : 'border hover:bg-gray-100'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 border rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
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

      {/* Quick View Modal */}
      {selectedProduct && (
        <QuickView
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
      
    </>
  );
}