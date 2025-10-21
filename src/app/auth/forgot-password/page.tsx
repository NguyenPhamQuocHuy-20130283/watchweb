"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, AlertCircle } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic gửi email khôi phục sẽ nằm ở đây
    console.log("Password reset requested for:", email);
    setIsSubmitted(true);
  };

  return (
    <div className="max-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8">
        <div className="text-center mb-6">
          <p className="text-Black-900 mt-2 weight-bold text-3xl ">
            Reset your password
          </p>
        </div>

        {isSubmitted ? (
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-800">
              Check your inbox
            </h2>
            <p className="text-gray-600 mt-2">
              We have sent a password reset link to{" "}
              <span className="font-bold">{email}</span>.
            </p>
            <Link
              href="/auth/login"
              className="mt-6 inline-block w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 font-bold"
            >
              Back to Sign In
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <p className="text-sm text-gray-600 mb-4">
                Enter the email address associated with your account and we'll
                send you a link to reset your password.
              </p>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 font-bold mt-1"
            >
              Send Reset Link
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
