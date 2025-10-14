'use client';

import { useState } from 'react';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import Breadcrumb from '@/components/home/Breadcrumb';
import ProductGallery from '@/components/product-detail/ProductGallery';
import ProductInfo from '@/components/product-detail/ProductInfo';
import ProductTabs from '@/components/product-detail/ProductTabs';
import RelatedProducts from '@/components/cart/RelatedProducts';
import { newProducts } from '@/data/dummy';
import { Heart, Share2, GitCompare } from 'lucide-react';
import { Product } from '@/types';
import { useCartStore } from '@/hooks/useCartStore';

interface ProductDetailClientProps {
  productId: number;
  relatedProducts: Product[];
}

export default function ProductDetailClient({ productId, relatedProducts  }: ProductDetailClientProps) {
  // Mock: Get product by ID (in real app, fetch from API)
  const product = newProducts.find(p => p.id == productId);
  console.log(product);
    // Handle case where product is not found
  if (!product) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          <h1 className="text-2xl font-bold">Product not found!</h1>
        </main>
        <Footer />
      </>
    );
  }
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Black');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const { addItem } = useCartStore();

  const images = [
    product.productPic,
    product.productHover,
    product.productPic,
    product.productHover,
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const colors = [
    { name: 'Black', hex: '#000000' },
    { name: 'White', hex: '#FFFFFF' },
    { name: 'Blue', hex: '#3B82F6' },
    { name: 'Red', hex: '#EF4444' },
  ];

  const handleAddToCart = () => {
    addItem(product, quantity, selectedSize, selectedColor);
    alert('✓ Added to cart!');
  };

  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-gray-50 pb-24 lg:pb-0">
        {/* Breadcrumb */}
        <div className="w-full px-8 lg:px-0 lg:w-5/6 mx-auto pt-6">
          <Breadcrumb 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Products', href: '/products' },
              { label: product.productName, href: `/products/${product.productName.toLowerCase()}` },
              { label: product.productInfo, href: '#' }
            ]} 
          />
        </div>

        {/* Product Detail */}
        <div className="w-full px-8 lg:px-0 lg:w-5/6 mx-auto mt-8 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-lg shadow-md p-8">
            {/* Left: Product Gallery */}
            <ProductGallery 
              images={images}
              activeImage={activeImage}
              onImageChange={setActiveImage}
            />

            {/* Right: Product Info */}
            <div className="flex flex-col">
              {/* Product Name & Category */}
              <div className="mb-4">
                <span className="text-sm text-red-500 font-semibold">{product.productName}</span>
                <h1 className="text-3xl font-bold text-gray-800 mt-2">{product.productInfo}</h1>
              </div>

              {/* Rating & Reviews */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex text-yellow-500 text-lg">
                  ⭐⭐⭐⭐⭐
                </div>
                <span className="text-gray-600">(125 reviews)</span>
                <button className="text-red-500 hover:text-red-600 text-sm font-semibold">
                  Write a Review
                </button>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-bold text-gray-800">{product.taxPrice}</span>
                <span className="text-2xl text-gray-400 line-through">{product.productPrice}</span>
                {product.present && (
                  <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                    {product.present} OFF
                  </span>
                )}
              </div>

              {/* Stock Status */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-green-600 font-semibold">In Stock</span>
                  <span className="text-gray-600">(234 items available)</span>
                </div>
                <p className="text-sm text-gray-600">
                  Order within <span className="text-red-500 font-semibold">2 hours 15 minutes</span> for same-day shipping
                </p>
              </div>

              <hr className="my-6" />

              {/* Size Selection */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-800">Size:</h3>
                  <button className="text-sm text-red-500 hover:text-red-600">Size Guide</button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-3 border-2 rounded-lg font-semibold transition-all ${
                        selectedSize === size
                          ? 'border-red-500 bg-red-50 text-red-500'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">Color: {selectedColor}</h3>
                <div className="flex gap-3">
                  {colors.map(color => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-12 h-12 rounded-full border-4 transition-all ${
                        selectedColor === color.name
                          ? 'border-red-500 scale-110'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    >
                      {color.hex === '#FFFFFF' && (
                        <div className="w-full h-full rounded-full border-2 border-gray-200" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">Quantity:</h3>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 border-2 border-gray-300 rounded-lg hover:bg-gray-100 font-bold text-xl"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-20 h-12 border-2 border-gray-300 rounded-lg text-center font-semibold text-lg"
                    min="1"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 border-2 border-gray-300 rounded-lg hover:bg-gray-100 font-bold text-xl"
                  >
                    +
                  </button>
                  <span className="text-gray-600 ml-2">
                    (Max: 10 per order)
                  </span>
                </div>
              </div>

              <hr className="my-6" />

              {/* Action Buttons */}
              <div className="flex gap-3 mb-6">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-red-500 text-white py-4 rounded-lg hover:bg-red-600 transition-colors font-bold text-lg"
                >
                  Add to Cart
                </button>
                <button className="w-14 h-14 border-2 border-gray-300 rounded-lg hover:bg-gray-100 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-gray-600" />
                </button>
                <button className="w-14 h-14 border-2 border-gray-300 rounded-lg hover:bg-gray-100 flex items-center justify-center">
                  <GitCompare className="w-6 h-6 text-gray-600" />
                </button>
                <button className="w-14 h-14 border-2 border-gray-300 rounded-lg hover:bg-gray-100 flex items-center justify-center">
                  <Share2 className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              <button className="w-full border-2 border-red-500 text-red-500 py-4 rounded-lg hover:bg-red-50 transition-colors font-bold text-lg mb-6">
                Buy Now
              </button>

              {/* Additional Info */}
              <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="font-semibold">SKU:</span>
                  <span className="text-gray-600">WW-{productId}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Category:</span>
                  <span className="text-gray-600">{product.productName}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Tags:</span>
                  <span className="text-gray-600">Watch, Fashion, Luxury</span>
                </div>
              </div>

              {/* Features */}
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-800">Free Shipping</p>
                    <p className="text-sm text-gray-600">On orders over $50</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-800">30-Day Returns</p>
                    <p className="text-sm text-gray-600">Money-back guarantee</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-800">Secure Payment</p>
                    <p className="text-sm text-gray-600">SSL encrypted checkout</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <ProductTabs product={product} />

          {/* Related Products */}
          <RelatedProducts products={relatedProducts} />
        </div>
      </main>
      
      <Footer />
    </>
  );
}