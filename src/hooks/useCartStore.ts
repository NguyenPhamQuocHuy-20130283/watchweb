// hooks/useCartStore.ts

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product, CartItem } from "@/types";

// ✅ INTERFACE: Add all missing function definitions
interface CartStore {
  items: CartItem[];
  addItem: (
    product: Product,
    quantity?: number,
    size?: string,
    color?: string
  ) => void;
  removeItem: (productId: number, size?: string, color?: string) => void;
  updateQuantity: (
    productId: number,
    quantity: number,
    size?: string,
    color?: string
  ) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getSubtotal: () => number;
  getShipping: () => number;
  getTax: () => number;
  getTotal: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      // --- Actions ---
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
          items: state.items.map((item) =>
            item.id === productId && item.size === size && item.color === color
              ? { ...item, quantity }
              : item
          ),
        }));
      },

      clearCart: () => set({ items: [] }),

      // --- Getters / Selectors ---
      getTotalItems: () => {
        const { items } = get();
        return items.reduce((total, item) => total + item.quantity, 0);
      },

      getSubtotal: () => {
        const { items } = get();
        return items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },

      // ✅ FIX: Use get() to call other functions in the store
      getShipping: () => {
        return get().getSubtotal() > 50 ? 0 : 5; // Free shipping over $50
      },

      // ✅ FIX: Use get() to call other functions in the store
      getTax: () => {
        return get().getSubtotal() * 0.1; // 10% tax
      },

      // ✅ FIX: Use get() to call other functions in the store
      getTotal: () => {
        return get().getSubtotal() + get().getTax() + get().getShipping();
      },
    }),
    {
      name: "cart-storage",
    }
  )
);
