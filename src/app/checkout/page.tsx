'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/hooks/useCartStore';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import Breadcrumb from '@/components/home/Breadcrumb';
import CheckoutSteps from '@/components/checkout/CheckoutSteps';
import ShippingForm from '@/components/checkout/ShippingForm';
import PaymentForm from '@/components/checkout/PaymentForm';
import OrderReview from '@/components/checkout/OrderReview';
import OrderSummary from '@/components/checkout/OrderSummary';
import { Lock, ShieldCheck } from 'lucide-react';
import LoadingSkeleton from '@/components/products/LoadingSkeleton';

export default function CheckoutPage() {
  const router = useRouter();
  const { items, getSubtotal, getTax, getShipping, getTotal, clearCart } = useCartStore();
  
  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
interface ShippingData {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  apartment: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone: string;
  saveInfo?: boolean; // ✅ The '?' goes here, in the TYPE definition.
}
  
  // Form data states
  const [shippingData, setShippingData] = useState<ShippingData>({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    phone: '',
    saveInfo: false,
  });

  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    saveCard: false,
  });

  // Redirect if cart is empty
  useEffect(() => {
    const unsub = useCartStore.persist.onFinishHydration(() => {
      setIsHydrated(true);
    });
    setIsHydrated(useCartStore.persist.hasHydrated());
      const savedInfoJSON = localStorage.getItem('shippingInfo');
  
  if (savedInfoJSON) {
    const savedInfo = JSON.parse(savedInfoJSON);
    setShippingData({ ...savedInfo, saveInfo: true });
  }

    // Dọn dẹp listener khi component unmount
    return () => {
      unsub();
    };
  }, []); // useEffect này chỉ chạy một lần


  if (!isHydrated) {
    return <LoadingSkeleton />
  }

if (items.length === 0 && !isProcessing) {
  if (typeof window !== 'undefined') {
    router.push('/cart');
  }
  return null;
}


  const handleShippingSubmit = (data: typeof shippingData) => {
    console.log('Shipping data submitted:', data);
    // save shipping data to local store
      if (data.saveInfo) {
    const dataToSave = { ...data };
    delete dataToSave.saveInfo;
    localStorage.setItem('shippingInfo', JSON.stringify(dataToSave));
  } else {
    localStorage.removeItem('shippingInfo');
  }
    setShippingData(data);
    setCurrentStep(2);
  };

  const handlePaymentSubmit = (data: typeof paymentData) => {
    setPaymentData(data);
    setCurrentStep(3);
  };

  const handlePlaceOrder = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Clear cart and redirect to success page
    clearCart();
    router.push('/checkout/success?orderId=WW' + Date.now());
  };

  if (items.length === 0) {
    console.log('Redirecting to cart as it is empty');
    return null; // Will redirect
  }

  return (
    <>


          <Breadcrumb 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Cart', href: '/cart' },
              { label: 'Checkout', href: '/checkout' }
            ]} 
          />
     

          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-800">Checkout</h1>
            <div className="flex items-center gap-2 text-green-600">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-sm font-semibold">Secure Checkout</span>
            </div>
          </div>
     

        {/* Checkout Steps */}
        <div className="mt-8">
          <CheckoutSteps currentStep={currentStep} />
        </div>

        {/* Checkout Content */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Checkout Form */}
            <div className="lg:col-span-2">
              {currentStep === 1 && (
                <ShippingForm
                  initialData={shippingData}
                  onSubmit={handleShippingSubmit}
                />
              )}

              {currentStep === 2 && (
                <PaymentForm
                  initialData={paymentData}
                  onSubmit={handlePaymentSubmit}
                  onBack={() => setCurrentStep(1)}
                />
              )}

              {currentStep === 3 && (
                <OrderReview
                  shippingData={shippingData}
                  paymentData={paymentData}
                  onEdit={(step) => setCurrentStep(step)}
                  onPlaceOrder={handlePlaceOrder}
                  isProcessing={isProcessing}
                />
              )}
            </div>

            {/* Right: Order Summary */}
            <div className="lg:col-span-1">
              <OrderSummary
                items={items}
                subtotal={getSubtotal()}
                tax={getTax()}
                shipping={getShipping()}
                total={getTotal()}
              />

              {/* Trust Badges */}
              <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                <h3 className="font-bold text-gray-800 mb-4">Why Shop With Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Lock className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-sm text-gray-800">Secure Payment</p>
                      <p className="text-xs text-gray-600">SSL encrypted transactions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                    <div>
                      <p className="font-semibold text-sm text-gray-800">Free Shipping</p>
                      <p className="text-xs text-gray-600">On orders over $50</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                    <div>
                      <p className="font-semibold text-sm text-gray-800">Easy Returns</p>
                      <p className="text-xs text-gray-600">30-day money back</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                <h3 className="font-bold text-gray-800 mb-4">Accepted Payment Methods</h3>
                <div className="flex flex-wrap gap-2">
                  <div className="px-3 py-2 border rounded bg-white">
                    <span className="text-sm font-semibold">VISA</span>
                  </div>
                  <div className="px-3 py-2 border rounded bg-white">
                    <span className="text-sm font-semibold">Mastercard</span>
                  </div>
                  <div className="px-3 py-2 border rounded bg-white">
                    <span className="text-sm font-semibold">AMEX</span>
                  </div>
                  <div className="px-3 py-2 border rounded bg-white">
                    <span className="text-sm font-semibold">PayPal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

    </>
  );
}