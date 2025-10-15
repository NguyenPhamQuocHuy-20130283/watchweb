import Link from 'next/link';

export default function EmptyCart() {
  return (
    <div className="mb-20">
      <div className="bg-white rounded-lg shadow-md p-12 text-center">
        <div className="text-8xl mb-6">🛒</div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Cart is Empty</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Looks like you haven't added anything to your cart yet. Start shopping to fill it up!
        </p>
        <Link href="/products">
          <button className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 transition-colors font-semibold text-lg">
            Start Shopping
          </button>
        </Link>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t">
          <h3 className="font-semibold text-gray-800 mb-4">Popular Categories</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/products/mens" className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition-colors">
              Men's Fashion
            </Link>
            <Link href="/products/womens" className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition-colors">
              Women's Fashion
            </Link>
            <Link href="/products/electronics" className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition-colors">
              Electronics
            </Link>
            <Link href="/products/accessories" className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition-colors">
              Accessories
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}