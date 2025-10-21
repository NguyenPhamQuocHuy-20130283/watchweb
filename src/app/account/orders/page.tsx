"use client";

import { useState, useEffect } from "react";
import { useAuthContext } from "@/contexts/AuthContext";
import OrderListItem, { Order } from "@/components/account/OrderListItem"; // Import Order type
import OrderDetailModal from "@/components/account/OrderDetailModal";
import LoadingSkeleton from "@/components/products/LoadingSkeleton";

// Dữ liệu đơn hàng giả lập (có thể chuyển ra file riêng)
const mockOrders: Order[] = [
  {
    id: "WW12345678",
    date: "October 15, 2025",
    status: "Delivered",
    total: 185.5,
    items: [
      { name: "Classic Chronograph Watch", qty: 1 },
      { name: "Leather Strap", qty: 1 },
    ],
  },
  {
    id: "WW98765432",
    date: "September 28, 2025",
    status: "Processing",
    total: 75.0,
    items: [{ name: "Minimalist Digital Watch", qty: 1 }],
  },
  {
    id: "WW55511223",
    date: "August 01, 2025",
    status: "Cancelled",
    total: 250.0,
    items: [{ name: "Luxury Automatic Watch", qty: 1 }],
  },
];

export default function OrdersPage() {
  const { user, isLoading: isAuthLoading } = useAuthContext();
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // State để quản lý modal
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  useEffect(() => {
    if (!isAuthLoading && user) {
      setTimeout(() => {
        // Simulate fetching orders
        setOrders(mockOrders);
        setIsLoading(false);
      }, 1000);
    } else if (!isAuthLoading && !user) {
      setIsLoading(false);
    }
  }, [isAuthLoading, user]);

  const handleViewDetails = (order: Order) => {
    setSelectedOrder(order);
  };

  const handleCloseModal = () => {
    setSelectedOrder(null);
  };

  if (isLoading || isAuthLoading) {
    // Có thể tạo skeleton riêng cho danh sách đơn hàng
    return (
      <div className="space-y-4">
        <LoadingSkeleton />
        <LoadingSkeleton />
      </div>
    );
  }

  if (!user) return <p>Please log in to view your orders.</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">My Orders</h1>

      {orders.length === 0 ? (
        <div className="bg-white p-6 rounded-lg shadow-md text-center text-gray-600">
          You haven't placed any orders yet.
        </div>
      ) : (
        <div className="space-y-4">
          {/* Sử dụng OrderListItem */}
          {orders.map((order) => (
            <OrderListItem
              key={order.id}
              order={order}
              onViewDetails={handleViewDetails} // Truyền hàm xử lý click
            />
          ))}
        </div>
      )}

      {/* Render Modal chi tiết đơn hàng */}
      <OrderDetailModal order={selectedOrder} onClose={handleCloseModal} />
    </div>
  );
}
