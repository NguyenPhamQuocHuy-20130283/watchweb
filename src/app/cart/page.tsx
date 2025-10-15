'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import Breadcrumb from '@/components/home/Breadcrumb';
import CartItem from '@/components/cart/CartItem';
import CartSummary from '@/components/cart/CartSummary';
import EmptyCart from '@/components/cart/EmptyCart';
import RelatedProducts from '@/components/cart/RelatedProducts';
import { useCartStore } from '@/hooks/useCartStore';
import CustomAlertDialog  from '@/components/ui/CustomAlertDialog';
import { newProducts } from '@/data/dummy';

export default function CartPage() {
 const {
  items,
  removeItem,
  updateQuantity,
  clearCart, // Lấy hàm clearCart từ store
  getSubtotal,
  getTax,
  getShipping,
  getTotal,
 } = useCartStore();
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<{code: string; discount: number} | null>(null);

  const handleApplyCoupon = () => {
    // Demo coupon codes
    const coupons: Record<string, number> = {
      'SAVE10': 10,
      'SAVE20': 20,
      'FREESHIP': 5,
    };

    const discount = coupons[couponCode.toUpperCase()];
    if (discount) {
      setAppliedCoupon({ code: couponCode.toUpperCase(), discount });
      setCouponCode('');
    } else {
      alert('Invalid coupon code');
    }
  };

  const relatedProducts = newProducts.slice(0, 4);
 const handleClearCartWithConfirmation = () => {
    const isConfirmed = window.confirm("Are you sure you want to remove all items from your cart?");
    if (isConfirmed) {
      clearCart(); // Gọi hàm clearCart từ store
    }
  };
  useEffect(() => {
  console.log("Current cart items:", items);
  }, [items]);
  return (
    <>


          <Breadcrumb 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Shopping Cart', href: '/cart' }
            ]} 
          />
      

    
          <h1 className="text-3xl font-bold text-gray-800">Shopping Cart</h1>
          <p className="text-gray-600 mt-2">
            {items.length} {items.length === 1 ? 'item' : 'items'} in your cart
          </p>
     

        {/* Cart Content */}
        {items.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="mb-20">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Cart Items */}
              <div className="w-full lg:w-2/3">
                <div className="bg-white rounded-lg shadow-md p-6">
                  {/* Clear Cart Button */}
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-800">Cart Items</h2>
                 <CustomAlertDialog
                        title="Are you absolutely sure?"
                        description="This action will permanently remove all items from your shopping cart."
                        onConfirm={clearCart} // Truyền hàm clearCart từ store vào đây
                      >
                        {/* Nút này sẽ là 'children' của component AlertDialog */}
                        <button className="text-sm text-red-500 hover:text-red-600 font-semibold">
                          Clear Cart
                        </button>
                      </CustomAlertDialog>
                  </div>

                  {/* Items List */}
                  <div className="space-y-4">
                    {items.map((item, index) => (
                      <CartItem
                        key={`${item.id}-${item.size}-${item.color}-${index}`}
                        item={item}
                        onRemove={() => removeItem(item.id, item.size, item.color)}
                        onUpdateQuantity={(qty) => updateQuantity(item.id, qty, item.size, item.color)}
                        
                      />
                    ))}
                  </div>
                </div>

                {/* Coupon Code */}
                <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">
                    Have a Coupon Code?
                  </h3>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="Enter coupon code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <button
                      onClick={handleApplyCoupon}
                      className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-semibold"
                    >
                      Apply
                    </button>
                  </div>
                  {appliedCoupon && (
                    <div className="mt-3 flex items-center justify-between bg-green-50 border border-green-200 rounded-lg p-3">
                      <span className="text-green-700 font-semibold">
                        Coupon "{appliedCoupon.code}" applied! -${appliedCoupon.discount}
                      </span>
                      <button
                        onClick={() => setAppliedCoupon(null)}
                        className="text-red-500 hover:text-red-600"
                      >
                        ✕
                      </button>
                    </div>
                  )}
                  <div className="mt-4 text-sm text-gray-600">
                    <p className="font-semibold">Try these codes:</p>
                    <p>• SAVE10 - $10 off</p>
                    <p>• SAVE20 - $20 off</p>
                    <p>• FREESHIP - Free shipping</p>
                  </div>
                </div>
              </div>

              {/* Cart Summary */}
              <div className="w-full lg:w-1/3">
                <CartSummary
                  subtotal={getSubtotal()}
                  tax={getTax()}
                  shipping={getShipping()}
                  discount={appliedCoupon?.discount || 0}
                  total={getTotal()}
                />

                {/* Additional Info */}
                <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                  <h3 className="font-bold text-gray-800 mb-4">Benefits</h3>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Free shipping on orders over $50</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>30-day money-back guarantee</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Secure payment processing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>24/7 customer support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Related Products */}
            <RelatedProducts products={relatedProducts} />
          </div>
        )}

    </>
  );
}
