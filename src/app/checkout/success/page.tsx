'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import { CheckCircle, Package, Mail, Download } from 'lucide-react';
import Link from 'next/link';

export default function CheckoutSuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const orderId = searchParams.get('orderId');
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    if (!orderId) {
      // Redirect to home page if orderId is not present
      console.log('Order ID not found');
      router.push('/');
      return;
    }
  }, [orderId, router]);

  if (!orderId) return null;

  return (
    <>


        <div className="max-w-3xl mx-auto px-8">
          {/* Success Animation */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-green-500 rounded-full mb-6 animate-bounce">
              <CheckCircle className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Order Placed Successfully!
            </h1>
            <p className="text-xl text-gray-600">
              Thank you for your purchase
            </p>
          </div>

          {/* Order Info Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
            <div className="border-b pb-4 mb-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Order Number</p>
                  <p className="text-2xl font-bold text-gray-800">{orderId}</p>
                </div>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Invoice
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Confirmation Email Sent</h3>
                  <p className="text-sm text-gray-600">
                    We've sent a confirmation email with your order details
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Package className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Estimated Delivery</h3>
                  <p className="text-sm text-gray-600">
                    Your order will be delivered in 3-5 business days
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <Link href="/account/orders">
              <button className="w-full bg-red-500 text-white py-4 rounded-lg hover:bg-red-600 transition-colors font-semibold">
                Track Order
              </button>
            </Link>
            <Link href="/products">
              <button className="w-full border-2 border-gray-300 text-gray-700 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Continue Shopping
              </button>
            </Link>
          </div>

          {/* Redirect Notice */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
            <p className="text-sm text-gray-700">
              Redirecting to homepage in <span className="font-bold text-red-500">{countdown}</span> seconds...
            </p>
          </div>

          {/* What's Next */}
          <div className="mt-8 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">What happens next?</h2>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Order Processing</h3>
                  <p className="text-sm text-gray-600">We'll process your order within 24 hours</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Shipping Notification</h3>
                  <p className="text-sm text-gray-600">You'll receive a tracking number via email</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Delivery</h3>
                  <p className="text-sm text-gray-600">Your package arrives at your doorstep</p>
                </div>
              </div>
            </div>
          </div>
        </div>

    </>
  );
}