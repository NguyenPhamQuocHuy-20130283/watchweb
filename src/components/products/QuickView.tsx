'use client';

import { Product } from '@/types';
import { useState } from 'react';
import { useCartContext } from '@/contexts/CartContext';
import { useCartStore } from '@/hooks/useCartStore';

interface QuickViewProps {
  product: Product;
  onClose: () => void;
}


export default function QuickView({ product, onClose }: QuickViewProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Black');
  const { addToCart } = useCartContext();
  const { addItem } = useCartStore();

  const handleAddToCart = () => {
    addItem(product);
    console.log('Added to cart:', product, { quantity, selectedSize, selectedColor });  
    onClose();
  };

 
  const sizes = product.sizes || ['S', 'M', 'L', 'XL'];
  const colors = ['Black', 'White', 'Red', 'Blue'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 z-10"
        >
          ✕
        </button>

        <div className="p-8 flex flex-col md:flex-row gap-8">
          {/* Product Images */}
          <div className="md:w-1/2">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
              <img
                src={product.productPic}
                alt={product.productInfo}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[product.productPic, product.productHover, product.productPic, product.productHover].map((img, i) => (
                <div key={i} className="aspect-square bg-gray-100 rounded border cursor-pointer hover:border-red-500">
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="md:w-1/2">
            <span className="text-red-500 text-sm font-semibold">{product.productName}</span>
            <h2 className="text-2xl font-bold text-gray-800 mt-2">
              {product.productInfo}
            </h2>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex text-yellow-500">⭐⭐⭐⭐⭐</div>
              <span className="text-gray-500 text-sm">(125 reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4 mt-4">
              <strong className="text-3xl text-gray-800">{product.taxPrice}</strong>
              <s className="text-xl text-gray-500">${product.productPrice}</s>
              {product.present && (
                <span className="bg-green-600 text-white text-sm font-bold px-2 py-1 rounded">
                  {product.present} OFF
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 mt-4 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum 
              accusantium necessitatibus, nemo repellendus architecto.
            </p>

            {/* Size Selection */}
            <div className="mt-6">
              <h4 className="font-semibold text-gray-800 mb-3">Size:</h4>
              <div className="flex gap-2">
                {sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 border rounded-lg font-semibold transition-all ${
                      selectedSize === size
                        ? 'bg-red-500 text-white border-red-500'
                        : 'border-gray-300 hover:border-red-500'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mt-6">
              <h4 className="font-semibold text-gray-800 mb-3">Color:</h4>
              <div className="flex gap-3">
                {colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border rounded-lg font-semibold transition-all ${
                      selectedColor === color
                        ? 'bg-gray-800 text-white border-gray-800'
                        : 'border-gray-300 hover:border-gray-800'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <h4 className="font-semibold text-gray-800 mb-3">Quantity:</h4>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border rounded-lg hover:bg-gray-100 font-bold"
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-16 h-10 border rounded-lg text-center font-semibold"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border rounded-lg hover:bg-gray-100 font-bold"
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-8">
              <button className="flex-1 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors font-semibold" onClick={handleAddToCart}>
                Add to Cart
              </button>
              <button className="w-12 h-12 border rounded-lg hover:bg-gray-100 flex items-center justify-center">
                ❤️
              </button>
              <button className="w-12 h-12 border rounded-lg hover:bg-gray-100 flex items-center justify-center">
                🔄
              </button>
            </div>

            {/* Additional Info */}
            <div className="mt-6 space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-gray-600">SKU:</span>
                <span className="font-semibold">A2K3D4F</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-600">Category:</span>
                <span className="font-semibold">{product.productName}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-600">Availability:</span>
                <span className="text-green-600 font-semibold">In Stock</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}