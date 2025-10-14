'use client';

import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";

// Một trang Orders đơn giản để ví dụ
export default function OrdersPage() {
    return (
      <>
        <Header />
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">My Orders</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <p>A list of past orders will be displayed here.</p>
                {/* Thêm danh sách đơn hàng tại đây */}
            </div>
        </div>
        <Footer />
      </>
    );
}