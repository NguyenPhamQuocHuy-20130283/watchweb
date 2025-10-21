// FILE: app/products/[category]/CategoryPageClient.tsx
"use client";

import { useState } from "react";
import { useFilters } from "@/hooks/useFilters";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import ProductCard from "@/components/home/ProductCard";
import ProductSidebar from "@/components/products/ProductSidebar";
import ProductSort from "@/components/products/ProductSort";
import Breadcrumb from "@/components/home/Breadcrumb";
import FilterTags from "@/components/products/FilterTags";
import EmptyState from "@/components/products/EmptyState";
import MobileFilters from "@/components/products/MobileFilters";
import { newProducts } from "@/data/dummy";

interface CategoryPageClientProps {
  category: string;
}

export default function CategoryPageClient({
  category,
}: CategoryPageClientProps) {
  const categoryName = category.replace(/-/g, " ").toUpperCase();
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter by category first
  const categoryProducts = newProducts.filter(
    (product) => product.productName.toLowerCase() === category.toLowerCase()
  );

  const {
    filters,
    toggleArrayFilter,
    updateFilter,
    clearFilters,
    isActive,
    filteredProducts,
  } = useFilters(categoryProducts);

  // Apply sorting
  let sortedProducts = [...filteredProducts];
  if (sortBy === "price-low") {
    sortedProducts.sort(
      (a, b) =>
        parseFloat(a.taxPrice.replace("$", "")) -
        parseFloat(b.taxPrice.replace("$", ""))
    );
  } else if (sortBy === "price-high") {
    sortedProducts.sort(
      (a, b) =>
        parseFloat(b.taxPrice.replace("$", "")) -
        parseFloat(a.taxPrice.replace("$", ""))
    );
  }

  // Pagination
  const itemsPerPage = 12;
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = sortedProducts.slice(startIndex, endIndex);

  // Active filter tags
  const activeFilterTags = [
    ...filters.categories.map((cat) => ({
      id: `cat-${cat}`,
      label: cat,
      type: "category" as const,
    })),
    ...filters.sizes.map((size) => ({
      id: `size-${size}`,
      label: `Size: ${size}`,
      type: "size" as const,
    })),
    ...filters.colors.map((color) => ({
      id: `color-${color}`,
      label: `Color: ${color}`,
      type: "color" as const,
    })),
    ...filters.brands.map((brand) => ({
      id: `brand-${brand}`,
      label: `Brand: ${brand}`,
      type: "brand" as const,
    })),
  ];

  const handleRemoveFilter = (filterId: string) => {
    const [type, value] = filterId.split("-");
    if (type === "cat") toggleArrayFilter("categories", value);
    if (type === "size") toggleArrayFilter("sizes", value);
    if (type === "color") toggleArrayFilter("colors", value);
    if (type === "brand") toggleArrayFilter("brands", value);
  };

  const handleClearAllFilters = () => {
    clearFilters();
    setCurrentPage(1);
  };

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: categoryName, href: `/products/${category}` },
        ]}
      />

      <h1 className="text-3xl font-bold text-gray-800">{categoryName}</h1>
      <p className="text-gray-600 mt-2">
        Showing {currentProducts.length > 0 ? startIndex + 1 : 0}-
        {Math.min(endIndex, sortedProducts.length)} of {sortedProducts.length}{" "}
        results
      </p>

      <div className="mb-20">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="hidden lg:block w-full lg:w-1/4">
            <ProductSidebar
              filters={filters}
              onToggleFilter={toggleArrayFilter}
              onPriceChange={(range) => updateFilter("priceRange", range)}
              onClearFilters={handleClearAllFilters}
              isActive={isActive}
            />
          </aside>

          <div className="w-full lg:w-3/4">
            {activeFilterTags.length > 0 && (
              <FilterTags
                filters={activeFilterTags}
                onRemove={handleRemoveFilter}
                onClearAll={handleClearAllFilters}
              />
            )}

            <ProductSort
              viewMode={viewMode}
              onViewModeChange={setViewMode}
              sortBy={sortBy}
              onSortChange={setSortBy}
            />

            {currentProducts.length === 0 ? (
              <EmptyState onClearFilters={handleClearAllFilters} />
            ) : (
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
                    : "flex flex-col gap-6"
                }
              >
                {currentProducts.map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
              </div>
            )}

            {currentProducts.length > 0 && totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-10">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(1, prev - 1))
                  }
                  disabled={currentPage === 1}
                  className="px-4 py-2 border rounded-lg hover:bg-gray-100 disabled:opacity-50 font-semibold"
                >
                  Previous
                </button>

                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-4 py-2 rounded-lg font-semibold ${
                      currentPage === i + 1
                        ? "bg-red-500 text-white"
                        : "border hover:bg-gray-100"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border rounded-lg hover:bg-gray-100 disabled:opacity-50 font-semibold"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <MobileFilters
        filters={filters}
        onToggleFilter={toggleArrayFilter}
        onPriceChange={(range) => updateFilter("priceRange", range)}
        onClearFilters={handleClearAllFilters}
        isActive={isActive}
      />
    </>
  );
}
