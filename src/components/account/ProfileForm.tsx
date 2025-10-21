"use client";

import { useState, useEffect } from "react";
import { useAuthContext } from "@/contexts/AuthContext";
import { Mail, Phone, Save, User } from "lucide-react";

export default function ProfileForm() {
  const { user, updateProfile } = useAuthContext();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        phone: user.phone || "",
      });
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setUpdateSuccess(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUpdating(true);
    setUpdateSuccess(false);
    try {
      updateProfile({
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
      });
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API delay
      setUpdateSuccess(true);
    } catch (error) {
      console.error("Failed to update profile:", error);
      alert("Failed to update profile.");
    } finally {
      setIsUpdating(false);
    }
  };

  if (!user) return null; // Hoặc một loading indicator nhỏ

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Personal Information
      </h2>
      {updateSuccess && (
        <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm">
          Information updated successfully!
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Avatar & Email (Display Only) */}
        <div className="flex items-center gap-4 mb-4">
          <img
            src={user.avatar}
            alt="User Avatar"
            className="w-14 h-14 rounded-full border"
          />
          <div>
            <p className="font-semibold">{`${formData.firstName} ${formData.lastName}`}</p>
            <p className="text-gray-600 text-sm">{user.email}</p>
          </div>
        </div>
        {/* Name Inputs */}
        <div className="grid grid-cols-2 gap-4">
          <div className="mr-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="input-field mr-2 border-black"
            />
          </div>
          <div className="w-full border-black">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
        </div>
        {/* Phone Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <div className="relative">
            <Phone className="input-icon" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 ..."
              className="input-field pl-9"
            />
          </div>
        </div>
        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isUpdating}
            className="button-primary w-full flex justify-center items-center gap-2"
          >
            {isUpdating ? <span className="loader"></span> : <Save size={18} />}
            {isUpdating ? "Saving..." : "Save Information"}
          </button>
        </div>
      </form>
    </div>
  );
}
