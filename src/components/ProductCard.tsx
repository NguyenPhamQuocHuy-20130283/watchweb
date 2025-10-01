'use client';

import { Product } from '@/types';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="product_pic cursor-pointer overflow-hidden flex flex-col gap-2 p-4 w-full h-92 border shadow-md bg-white rounded-lg relative">
      {product.present && (
        <div className="z-10 tax absolute top-2 left-2 bg-green-600 text-white text-sm font-bold border rounded-md px-2 py-1">
          {product.present}
        </div>
      )}
      
      <div className="productOptions hidden flex-col gap-2 absolute right-2 top-2 text-xl font-semibold z-10">
        <div className="w-8 h-8 bg-white rounded-lg shadow-md border flex items-center justify-center cursor-pointer text-gray-700 hover:text-white hover:bg-gray-700">
          🛍️
        </div>
      </div>
      
      <div className="w-full h-1/2 mb-2 relative">
        <div 
          className="w-full h-full" 
          style={{ 
            backgroundImage: `url('${product.productPic}')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        >
          <Image
            className="product_hover_pic w-full h-full object-cover"
            src={product.productHover}
            alt={product.productInfo}
            width={200}
            height={200}
          />
        </div>
      </div>

      <h3 className="text-red-500">{product.productName}</h3>
      <h5>{product.productInfo}</h5>

      <div className="stars text-yellow-500 flex">
        ⭐⭐⭐⭐⭐
      </div>
      
      <div className="flex items-center justify-start gap-4 font-semibold text-sm">
        <strong>{product.taxPrice}</strong>
        <s className="text-gray-500">{product.productPrice}</s>
      </div>
    </div>
  );
}