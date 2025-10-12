'use client';

import { CartItem as CartItemType } from '@/types';
import { Trash2 } from 'lucide-react';
import Link from 'next/link';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (quantity: number) => void;
  onRemove: () => void;
}

export default function CartItem({ item, onUpdateQuantity, onRemove }: CartItemProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg hover:shadow-md transition-shadow">
      {/* Product Image */}
      <div className="w-full md:w-32 h-32 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
        <img
          src={item.productPic}
          alt={item.productInfo}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1">
        <Link href={`/products/${item.id}`}>
          <h3 className="font-bold text-gray-800 hover:text-red-500 transition-colors">
            {item.productInfo}
          </h3>
        </Link>
        <p className="text-sm text-gray-600 mt-1">{item.productName}</p>
        
        <div className="flex gap-4 mt-2 text-sm">
          {item.size && (
            <span className="text-gray-600">Size: <strong>{item.size}</strong></span>
          )}
          {item.color && (
            <span className="text-gray-600">Color: <strong>{item.color}</strong></span>
          )}
        </div>

        {/* Mobile Price */}
        <div className="md:hidden mt-2">
          <span className="text-lg font-bold text-gray-800">
            ${(item.price * item.quantity)}
          </span>
          <span className="text-sm text-gray-500 ml-2">
            (${item.price} each)
          </span>
        </div>
      </div>

      {/* Quantity Controls */}
      <div className="flex md:flex-col items-center md:items-end gap-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => onUpdateQuantity(item.quantity - 1)}
            className="w-8 h-8 border rounded-lg hover:bg-gray-100 flex items-center justify-center font-bold"
            disabled={item.quantity <= 1}
          >
            -
          </button>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => onUpdateQuantity(parseInt(e.target.value) || 1)}
            className="w-16 h-8 border rounded-lg text-center font-semibold"
            min="1"
          />
          <button
            onClick={() => onUpdateQuantity(item.quantity + 1)}
            className="w-8 h-8 border rounded-lg hover:bg-gray-100 flex items-center justify-center font-bold"
          >
            +
          </button>
        </div>

        {/* Desktop Price */}
        <div className="hidden md:block text-right">
          <div className="text-lg font-bold text-gray-800">
            ${(item.price * item.quantity)}
          </div>
          <div className="text-sm text-gray-500">
            {item.price} each
          </div>
        </div>

        {/* Remove Button */}
        <button
          onClick={onRemove}
          className="text-red-500 hover:text-red-600 hover:bg-red-50 p-2 rounded-lg transition-colors"
          title="Remove item"
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
}