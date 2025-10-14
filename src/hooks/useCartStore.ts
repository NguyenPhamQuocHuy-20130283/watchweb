// src/hooks/useCartStore.ts

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product, CartItem } from "@/types";

interface CartStore {
  items: CartItem[];
  addItem: (
    product: Product,
    quantity?: number,
    size?: string,
    color?: string
  ) => void;
  setItems: (items: CartItem[]) => void;
  removeItem: (productId: number, size?: string, color?: string) => void;
  updateQuantity: (
    productId: number,
    quantity: number,
    size?: string,
    color?: string
  ) => void;
  clearCart: () => void; // Các hàm getters không cần thay đổi
  getTotalItems: () => number;
  getSubtotal: () => number;
  getShipping: () => number;
  getTax: () => number;
  getTotal: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [], // Chỉ có một mảng items duy nhất làm nguồn chân lý // --- Actions ---
      setItems: (serverItems) => set({ items: serverItems }),
      addItem: (product, quantity = 1, size, color) => {
        set((state) => {
          const existingItem = state.items.find(
            (item) =>
              item.id === product.id &&
              item.size === size &&
              item.color === color
          );

          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.id === product.id &&
                item.size === size &&
                item.color === color
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
            };
          }

          const newItem: CartItem = {
            id: product.id,
            productName: product.productName,
            productInfo: product.productInfo,
            productPic: product.productPic,
            price: product.productPrice,
            quantity,
            size,
            color,
          };
          return { items: [...state.items, newItem] };
        });
      },

      removeItem: (productId, size, color) => {
        set((state) => ({
          items: state.items.filter(
            (item) =>
              !(
                item.id === productId &&
                item.size === size &&
                item.color === color
              )
          ),
        }));
      },

      updateQuantity: (productId, quantity, size, color) => {
        set((state) => ({
          items: state.items
            .map((item) =>
              item.id === productId &&
              item.size === size &&
              item.color === color
                ? { ...item, quantity }
                : item
            )
            .filter((item) => item.quantity > 0),
        }));
      },

      clearCart: () => set({ items: [] }), // --- Getters / Selectors (Không thay đổi) ---

      getTotalItems: () =>
        get().items.reduce((total, item) => total + item.quantity, 0),
      getSubtotal: () =>
        get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        ),
      getShipping: () => (get().getSubtotal() > 50 ? 0 : 5),
      getTax: () => get().getSubtotal() * 0.1,
      getTotal: () =>
        get().getSubtotal() + get().getTax() + get().getShipping(),
    }),
    {
      name: "cart-storage", // Key lưu trong localStorage
    }
  )
);
