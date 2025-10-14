"use client";

import { useState, useEffect } from "react";
import { useCartStore } from "./useCartStore";

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  avatar?: string;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const {
    items: localCartItems,
    clearCart,
    setItems,
  } = useCartStore.getState();
  const syncUserCart = async () => {
    // 1. Lấy giỏ hàng local để gửi đi
    const itemsToMerge = localCartItems;

    // 2. Xóa giỏ hàng local ngay lập tức để chuẩn bị nhận dữ liệu mới
    clearCart();

    try {
      // 3. Gọi API để hợp nhất và lấy về giỏ hàng mới nhất
      console.log("Syncing cart for user...");
      // const finalCart = await api.post('/cart/sync', { items: itemsToMerge });

      // Dữ liệu giả, thay thế bằng API thật
      const mockServerCart = [
        {
          id: 1,
          productName: "Rolex from DB",
          price: 5000,
          quantity: 1,
          size: "M",
          color: "Black",
          productPic: "",
          productInfo: "",
        },
        ...itemsToMerge, // Giả lập việc server đã hợp nhất
      ];
      await new Promise((resolve) => setTimeout(resolve, 500));

      // 4. Cập nhật cart store với dữ liệu từ server
      setItems(mockServerCart);
      console.log("Cart synced with server data.");
    } catch (error) {
      console.error("Failed to sync cart:", error);
      // Nếu lỗi, có thể trả lại giỏ hàng cũ cho người dùng
      setItems(itemsToMerge);
    }
  };
  useEffect(() => {
    const savedUserJson =
      sessionStorage.getItem("user") || localStorage.getItem("user");
    if (savedUserJson) {
      const loggedInUser = JSON.parse(savedUserJson);
      setUser(loggedInUser);
      // Nếu có người dùng, đồng bộ giỏ hàng ngay khi tải trang
      syncUserCart();
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Mock user data
    const userData: User = {
      id: Date.now().toString(),
      email,
      firstName: "John",
      lastName: "Doe",
      avatar:
        "https://ui-avatars.com/api/?name=John+Doe&background=ef4444&color=fff",
    };

    setUser(userData);
    sessionStorage.setItem("user", JSON.stringify(userData));

    await syncUserCart(); // Đồng bộ giỏ hàng sau khi đăng nhập
    return userData;
  };

  const register = async (data: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const userData: User = {
      id: Date.now().toString(),
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      avatar: `https://ui-avatars.com/api/?name=${data.firstName}+${data.lastName}&background=ef4444&color=fff`,
    };

    setUser(userData);
    sessionStorage.setItem("user", JSON.stringify(userData));
    return userData;
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem("user");
    // localStorage.removeItem("user");
    useCartStore.getState().clearCart();
  };

  const updateProfile = (updates: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      sessionStorage.setItem("user", JSON.stringify(updatedUser));
    }
  };

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    register,
    logout,
    updateProfile,
  };
}
