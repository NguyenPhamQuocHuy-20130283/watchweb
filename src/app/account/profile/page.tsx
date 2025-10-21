"use client";

import ProfileForm from "@/components/account/ProfileForm";
import ChangePasswordForm from "@/components/account/ChangePasswordForm";
import { useAuthContext } from "@/contexts/AuthContext";
import LoadingSkeleton from "@/components/products/LoadingSkeleton";

export default function ProfilePage() {
  const { isLoading: isAuthLoading } = useAuthContext();

  // Có thể thêm skeleton loading ở đây nếu muốn
  if (isAuthLoading) {
    return (
      <div className="max-w-2xl mx-auto">
        <LoadingSkeleton />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        My Profile
      </h1>
      <ProfileForm />
      <ChangePasswordForm />
    </div>
  );
}
