// src/app/layout.tsx

import type { Metadata } from "next";
import { AuthProvider } from "@/contexts/AuthContext";
import Header from "@/components/home/Header"; // Giả sử bạn muốn Header và Footer luôn ở ngoài container
import Footer from "@/components/home/Footer";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Watch Web",
  description: "Your favorite watch store",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <AuthProvider>
          <Header />
          {/* ✅ TẠO CONTAINER TRUNG TÂM CHO TOÀN BỘ NỘI DUNG TRANG */}
          <main className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 ">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}