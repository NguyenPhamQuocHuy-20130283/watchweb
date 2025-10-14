import ProtectedRoute from "@/components/ProtectedRoute";

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    // Bất kỳ trang nào trong thư mục /account sẽ được bao bọc bởi ProtectedRoute
    <ProtectedRoute>
        {children}
    </ProtectedRoute>
  );
}