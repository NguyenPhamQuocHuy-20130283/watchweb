'use client';

import { useState } from 'react';
import { useCartContext } from '@/contexts/CartContext';
import Link from 'next/link';
import { ShoppingCart, X, Trash2 } from 'lucide-react';

export default function MiniCart() {
  const [isOpen, setIsOpen] = useState(false);
  const { items, removeFromCart, getItemCount, getSubtotal } = useCartContext();

  return (
    <>
      {/* Cart Icon with Badge */}
      <button
        onClick={() => setIsOpen(true)}
        className="relative cursor-pointer hover:bg-gray-300 p-1 rounded-full transition-all"
      >
        {getItemCount() > 0 && (
          <span className="text-xs text-center font-semibold text-white absolute -top-2 -right-2 w-5 h-5 bg-red-400 rounded-full flex items-center justify-center">
            {getItemCount()}
          </span>
        )}
        <ShoppingCart size={35} />
      </button>

      {/* Mini Cart Sidebar */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Sidebar */}
          <div className="fixed top-0 right-0 w-full sm:w-96 h-full bg-white z-50 shadow-2xl flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-bold text-gray-800">
                Shopping Cart ({getItemCount()})
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingCart size={64} className="text-gray-300 mb-4" />
                  <p className="text-gray-600 mb-4">Your cart is empty</p>
                  <Link href="/products">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
                    >
                      Start Shopping
                    </button>
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item, index) => (
                    <div
                      key={`${item.id}-${item.size}-${item.color}-${index}`}
                      className="flex gap-3 p-3 border rounded-lg hover:shadow-md transition-shadow"
                    >
                      <img
                        src={item.productPic}
                        alt={item.productInfo}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm text-gray-800 truncate">
                          {item.productInfo}
                        </h3>
                        <p className="text-xs text-gray-600 mt-1">
                          {item.size && `Size: ${item.size}`}
                          {item.color && ` • Color: ${item.color}`}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-sm">Qty: {item.quantity}</span>
                          <span className="font-bold text-sm">
                            ${(item.price * item.quantity)}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.size, item.color)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t p-4 space-y-3">
                <div className="flex items-center justify-between font-bold text-lg">
                  <span>Subtotal:</span>
                  <span>${getSubtotal()}</span>
                </div>
                <p className="text-xs text-gray-600 text-center">
                  Shipping and taxes calculated at checkout
                </p>
                <Link href="/cart">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors font-semibold"
                  >
                    View Cart
                  </button>
                </Link>
                <Link href="/checkout">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                  >
                    Checkout
                  </button>
                </Link>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}