import Link from 'next/link';

interface CartSummaryProps {
  subtotal: number;
  tax: number;
  shipping: number;
  discount: number;
  total: number;
}

export default function CartSummary({
  subtotal,
  tax,
  shipping,
  discount,
  total
}: CartSummaryProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>
      
      <div className="space-y-3">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span className="font-semibold">${subtotal}</span>
        </div>
        
        <div className="flex justify-between text-gray-600">
          <span>Tax (10%)</span>
          <span className="font-semibold">${tax}</span>
        </div>
        
        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span className="font-semibold">
            {shipping === 0 ? (
              <span className="text-green-600">FREE</span>
            ) : (
              `$${shipping}`
            )}
          </span>
        </div>

        {discount > 0 && (
          <div className="flex justify-between text-green-600">
            <span>Discount</span>
            <span className="font-semibold">-${discount}</span>
          </div>
        )}
        
        <hr className="my-4" />
        
        <div className="flex justify-between text-lg font-bold text-gray-800">
          <span>Total</span>
          <span>${total}</span>
        </div>
      </div>

      {shipping > 0 && (
        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-700">
          <strong>💡 Tip:</strong> Add ${(50 - subtotal)} more to get free shipping!
        </div>
      )}

      <Link href="/checkout">
        <button className="w-full mt-6 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors font-semibold">
          Proceed to Checkout
        </button>
      </Link>

      <Link href="/products">
        <button className="w-full mt-3 border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
          Continue Shopping
        </button>
      </Link>

      {/* Payment Methods */}
      <div className="mt-6 pt-6 border-t">
        <p className="text-sm text-gray-600 mb-3">We accept:</p>
        <div className="flex gap-2 flex-wrap">
          <div className="px-3 py-2 border rounded bg-white text-xs font-semibold">VISA</div>
          <div className="px-3 py-2 border rounded bg-white text-xs font-semibold">Mastercard</div>
          <div className="px-3 py-2 border rounded bg-white text-xs font-semibold">PayPal</div>
          <div className="px-3 py-2 border rounded bg-white text-xs font-semibold">Stripe</div>
        </div>
      </div>
    </div>
  );
}