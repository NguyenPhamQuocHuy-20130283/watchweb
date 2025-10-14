'use client';

import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";

// Một trang Profile đơn giản để ví dụ
export default function ProfilePage() {
    return (
    <>
        <Header />
            <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">My Profile</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <p>User profile information will be displayed and editable here.</p>
                {/* Thêm form chỉnh sửa thông tin tại đây */}
            </div>
        </div>
        <Footer />
    </>
    );
}