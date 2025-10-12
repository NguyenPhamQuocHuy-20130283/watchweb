import { Edit } from 'lucide-react';

interface OrderReviewProps {
  shippingData: any;
  paymentData: any;
  onEdit: (step: number) => void;
  onPlaceOrder: () => void;
  isProcessing: boolean;
}

export default function OrderReview({
  shippingData,
  paymentData,
  onEdit,
  onPlaceOrder,
  isProcessing
}: OrderReviewProps) {
  return (
    <div className="space-y-6">
      {/* Shipping Information */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-800">Shipping Information</h3>
          <button
            onClick={() => onEdit(1)}
            className="text-red-500 hover:text-red-600 flex items-center gap-2 text-sm font-semibold"
          >
            <Edit className="w-4 h-4" />
            Edit
          </button>
        </div>
        <div className="space-y-2 text-gray-700">
          <p><strong>Name:</strong> {shippingData.firstName} {shippingData.lastName}</p>
          <p><strong>Email:</strong> {shippingData.email}</p>
          <p><strong>Phone:</strong> {shippingData.phone}</p>
          <p>
            <strong>Address:</strong> {shippingData.address}
            {shippingData.apartment && `, ${shippingData.apartment}`}
          </p>
          <p>
            {shippingData.city}, {shippingData.state} {shippingData.zipCode}
          </p>
          <p>{shippingData.country}</p>
        </div>
      </div>

      {/* Payment Information */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-800">Payment Information</h3>
          <button
            onClick={() => onEdit(2)}
            className="text-red-500 hover:text-red-600 flex items-center gap-2 text-sm font-semibold"
          >
            <Edit className="w-4 h-4" />
            Edit
          </button>
        </div>
        <div className="space-y-2 text-gray-700">
          <p><strong>Card Number:</strong> •••• •••• •••• {paymentData.cardNumber.slice(-4)}</p>
          <p><strong>Cardholder:</strong> {paymentData.cardName}</p>
          <p><strong>Expires:</strong> {paymentData.expiryDate}</p>
        </div>
      </div>

      {/* Terms & Conditions */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            className="w-5 h-5 text-red-500 border-gray-300 rounded focus:ring-red-500 mt-0.5"
            required
          />
          <span className="text-sm text-gray-700">
            I agree to the <a href="#" className="text-red-500 hover:text-red-600 font-semibold">Terms and Conditions</a> and <a href="#" className="text-red-500 hover:text-red-600 font-semibold">Privacy Policy</a>
          </span>
        </label>
      </div>

      {/* Place Order Button */}
      <button
        onClick={onPlaceOrder}
        disabled={isProcessing}
        className="w-full bg-red-500 text-white py-4 rounded-lg hover:bg-red-600 transition-colors font-bold text-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {isProcessing ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Processing Payment...
          </span>
        ) : (
          'Place Order'
        )}
      </button>

      <p className="text-center text-sm text-gray-600">
        By placing your order, you agree to our company Privacy Policy and Conditions of Use.
      </p>
    </div>
  );
}