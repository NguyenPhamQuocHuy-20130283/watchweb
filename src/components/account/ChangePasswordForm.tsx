"use client";

import { useState } from "react";
import { Lock, Save } from "lucide-react";

export default function ChangePasswordForm() {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<any>({});
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [serverError, setServerError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
    setUpdateSuccess(false);
    setServerError("");
  };

  const validate = () => {
    const newErrors: any = {};
    if (!formData.currentPassword)
      newErrors.currentPassword = "Current password is required";
    if (!formData.newPassword)
      newErrors.newPassword = "New password is required";
    else if (formData.newPassword.length < 6)
      newErrors.newPassword = "New password must be at least 6 characters";
    if (formData.newPassword !== formData.confirmPassword)
      newErrors.confirmPassword = "New passwords do not match";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsUpdating(true);
    setUpdateSuccess(false);
    setServerError("");

    try {
      // --- GỌI API ĐỔI MẬT KHẨU Ở ĐÂY ---
      // const response = await api.post('/auth/change-password', formData);
      // Giả lập thành công/thất bại
      await new Promise((resolve) => setTimeout(resolve, 1500));
      if (formData.currentPassword === "wrong") {
        // Giả lập sai mật khẩu hiện tại
        throw new Error("Incorrect current password");
      }

      setUpdateSuccess(true);
      setFormData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      }); // Reset form
      // ------------------------------------
    } catch (error: any) {
      console.error("Failed to change password:", error);
      setServerError(
        error.message || "Failed to change password. Please try again."
      );
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Change Password
      </h2>
      {updateSuccess && (
        <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm">
          Password updated successfully!
        </div>
      )}
      {serverError && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
          {serverError}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Current Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Current Password
          </label>
          <input
            type="password"
            name="currentPassword"
            value={formData.currentPassword}
            onChange={handleChange}
            required
            className={`input-field ${
              errors.currentPassword ? "border-red-500" : ""
            }`}
          />
          {errors.currentPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.currentPassword}
            </p>
          )}
        </div>
        {/* New Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            New Password
          </label>
          <input
            type="password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            required
            className={`input-field ${
              errors.newPassword ? "border-red-500" : ""
            }`}
          />
          {errors.newPassword && (
            <p className="text-red-500 text-sm mt-1">{errors.newPassword}</p>
          )}
        </div>
        {/* Confirm New Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Confirm New Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className={`input-field ${
              errors.confirmPassword ? "border-red-500" : ""
            }`}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmPassword}
            </p>
          )}
        </div>
        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isUpdating}
            className="button-primary w-full flex justify-center items-center gap-2"
          >
            {isUpdating ? <span className="loader"></span> : <Save size={18} />}
            {isUpdating ? "Updating..." : "Update Password"}
          </button>
        </div>
      </form>
    </div>
  );
}
