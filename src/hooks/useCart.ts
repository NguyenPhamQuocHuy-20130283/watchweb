"use client";

import { useState, useEffect } from "react";
import { CartItem } from "@/types";

export function useCart() {
  // ✅ THAY ĐỔI 1: Tải giỏ hàng từ localStorage khi khởi tạo.
  // Hàm này chỉ chạy một lần duy nhất.
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }
    try {
      const savedItems = localStorage.getItem("cart-items");
      return savedItems ? JSON.parse(savedItems) : [];
    } catch (error) {
      console.error("Failed to parse cart items from localStorage", error);
      return [];
    }
  });

  // ✅ THAY ĐỔI 2: Lưu giỏ hàng vào localStorage mỗi khi `items` thay đổi.
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart-items", JSON.stringify(items));
    }
  }, [items]);

  // --- Tất cả các hàm bên dưới không cần thay đổi gì ---

  const addToCart = (
    item: Omit<CartItem, "quantity"> & { quantity?: number }
  ) => {
    setItems((prev) => {
      const existingItem = prev.find(
        (i) =>
          i.id === item.id && i.size === item.size && i.color === item.color
      );

      if (existingItem) {
        return prev.map((i) =>
          i.id === item.id && i.size === item.size && i.color === item.color
            ? { ...i, quantity: i.quantity + (item.quantity || 1) }
            : i
        );
      }

      return [...prev, { ...item, quantity: item.quantity || 1 }];
    });
  };

  const removeFromCart = (id: number, size?: string, color?: string) => {
    setItems((prev) =>
      prev.filter(
        (item) =>
          !(item.id === id && item.size === size && item.color === color)
      )
    );
  };

  const updateQuantity = (
    id: number,
    quantity: number,
    size?: string,
    color?: string
  ) => {
    if (quantity < 1) return;

    setItems((prev) =>
      prev.map((item) =>
        item.id === id && item.size === size && item.color === color
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const getItemCount = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const getSubtotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getTax = () => {
    return getSubtotal() * 0.1; // 10% tax
  };

  const getShipping = () => {
    return getSubtotal() > 50 ? 0 : 5; // Free shipping over $50
  };

  const getTotal = () => {
    return getSubtotal() + getTax() + getShipping();
  };

  return {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getItemCount,
    getSubtotal,
    getTax,
    getShipping,
    getTotal,
  };
}
