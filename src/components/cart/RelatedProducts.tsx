'use client';

import { newProducts } from '@/data/dummy';
import ProductCard from '@/components/home/ProductCard';
import { Product } from '@/types';

interface RelatedProductsProps {
  products: Product[]; // Chỉ nhận danh sách sản phẩm từ props
}

export default function RelatedProducts( { products }: RelatedProductsProps) {


  return (
    <div className="mt-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">You May Also Like</h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
        
      </div>
    </div>
  );
}
