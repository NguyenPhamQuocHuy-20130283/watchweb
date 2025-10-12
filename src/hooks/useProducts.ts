"use client";

import { useState, useEffect } from "react";
import { Product } from "@/types";
import { newProducts } from "@/data/dummy";

interface UseProductsOptions {
  category?: string;
  priceRange?: [number, number];
  sizes?: string[];
  colors?: string[];
  sortBy?: string;
  page?: number;
  perPage?: number;
}

export function useProducts(options: UseProductsOptions = {}) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      let filtered = [...newProducts];

      // Lọc theo category
      if (options.category) {
        filtered = filtered.filter(
          (p) => p.category?.toLowerCase() === options.category?.toLowerCase()
        );
      }

      // Lọc theo khoảng giá
      if (options.priceRange) {
        filtered = filtered.filter((p) => {
          const price = parseFloat(p.taxPrice.replace(/,/g, ""));
          return (
            price >= options.priceRange![0] && price <= options.priceRange![1]
          );
        });
      }

      // Lọc theo size
      if (options.sizes && options.sizes.length > 0) {
        filtered = filtered.filter((p) =>
          p.sizes?.some((size) => options.sizes!.includes(size))
        );
      }

      // Lọc theo màu
      if (options.colors && options.colors.length > 0) {
        filtered = filtered.filter((p) => options.colors!.includes(p.color));
      }

      // Sort
      if (options.sortBy === "price-low") {
        filtered.sort(
          (a, b) =>
            parseFloat(a.taxPrice.replace(/,/g, "")) -
            parseFloat(b.taxPrice.replace(/,/g, ""))
        );
      } else if (options.sortBy === "price-high") {
        filtered.sort(
          (a, b) =>
            parseFloat(b.taxPrice.replace(/,/g, "")) -
            parseFloat(a.taxPrice.replace(/,/g, ""))
        );
      }

      // Pagination
      const page = options.page ?? 1;
      const perPage = options.perPage ?? 12;
      const start = (page - 1) * perPage;
      const end = start + perPage;

      setTotal(filtered.length);
      setProducts(filtered.slice(start, end));
      setLoading(false);
    }, 500);
  }, [
    options.category,
    options.priceRange,
    options.sizes,
    options.colors,
    options.sortBy,
    options.page,
    options.perPage,
  ]);

  return { products, loading, total };
}
