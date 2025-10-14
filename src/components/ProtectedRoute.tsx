'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '@/contexts/AuthContext';
import LoadingSkeleton from '@/components/products/LoadingSkeleton'; // Hoặc một component loading khác

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
 const { isAuthenticated, isLoading } = useAuthContext();
 const router = useRouter();

 useEffect(() => {
  // Chờ cho đến khi quá trình kiểm tra auth hoàn tất
  if (!isLoading && !isAuthenticated) {
   // Lưu lại trang muốn truy cập để redirect sau khi đăng nhập
   const currentPath = window.location.pathname;
   router.push(`/auth/login?redirect=${currentPath}`);
  }
 }, [isLoading, isAuthenticated, router]);

 // Hiển thị màn hình loading trong khi đang kiểm tra
 if (isLoading) {
  return <LoadingSkeleton />;
 }
 
 // Nếu đã xác thực, hiển thị nội dung của trang
 if (isAuthenticated) {
  return <>{children}</>;
 }

 // Trả về null trong khi đang redirect
 return null;
}