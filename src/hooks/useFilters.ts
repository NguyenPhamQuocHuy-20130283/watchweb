"use client";

import { Product } from "@/types";
import { useState } from "react";

interface Filters {
  categories: string[];
  priceRange: [number, number];
  sizes: string[];
  colors: string[];
  brands: string[];
}

export function useFilters(products: Product[]) {
  const [filters, setFilters] = useState<Filters>({
    categories: [],
    priceRange: [0, 1000],
    sizes: [],
    colors: [],
    brands: [],
  });

  const isActive = <K extends keyof Filters>(key: K, value: string) => {
    return (
      Array.isArray(filters[key]) && (filters[key] as string[]).includes(value)
    );
  };
  const updateFilter = <K extends keyof Filters>(key: K, value: Filters[K]) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      categories: [],
      priceRange: [0, 1000],
      sizes: [],
      colors: [],
      brands: [],
    });
  };

  const toggleArrayFilter = <K extends keyof Filters>(
    key: K,
    value: string
  ) => {
    if (!Array.isArray(filters[key])) return;

    const array = filters[key] as string[];
    const newArray = array.includes(value)
      ? array.filter((item) => item !== value)
      : [...array, value];

    updateFilter(key, newArray as Filters[K]);
  };
  const addFilter = (key: keyof Filters, value: string) => {
    if (!Array.isArray(filters[key])) return;
    const array = filters[key] as string[];
    if (!array.includes(value)) {
      const newArray = [...array, value];
      updateFilter(key, newArray as Filters[typeof key]);
    }
  };
  const removeFilter = (key: keyof Filters, value: string) => {
    if (!Array.isArray(filters[key])) return;
    const array = filters[key] as string[];
    if (array.includes(value)) {
      const newArray = array.filter((item) => item !== value);
      updateFilter(key, newArray as Filters[typeof key]);
    }
  };

  const filteredProducts = products.filter((product) => {
    // Filter by categories
    if (
      filters.categories.length > 0 &&
      !filters.categories.includes(product.category?.toLowerCase() || "")
    ) {
      return false;
    }
    // Filter by price range
    if (
      product.productPrice < filters.priceRange[0] ||
      product.productPrice > filters.priceRange[1]
    ) {
      return false;
    }
    // Filter by sizes
    if (
      filters.sizes.length > 0 &&
      !filters.sizes.some((size) => product.sizes.includes(size))
    ) {
      return false;
    }
    // Filter by colors
    if (
      filters.colors.length > 0 &&
      !filters.colors.includes(product.color[0].toLowerCase())
    ) {
      return false;
    }
    // Filter by brands
    if (filters.brands.length > 0 && !filters.brands.includes(product.brand)) {
      return false;
    }
    return true;
  });

  return {
    filters,
    updateFilter,
    clearFilters,
    toggleArrayFilter,
    isActive,
    addFilter,
    removeFilter,
    filteredProducts,
  };
}
