'use client';

import { Product } from '@/types';

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className="prose max-w-none">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Information</h2>
      <p className="text-gray-600 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      
      <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Key Features</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-600">
        <li>High-quality materials and craftsmanship</li>
        <li>Durable and long-lasting design</li>
        <li>Comfortable fit for all-day wear</li>
        <li>Available in multiple sizes and colors</li>
        <li>Easy to care for and maintain</li>
      </ul>

      <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Specifications</h3>
      <table className="w-full border-collapse">
        <tbody>
          <tr className="border-b">
            <td className="py-2 font-semibold text-gray-800">Material:</td>
            <td className="py-2 text-gray-600">Premium Leather</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 font-semibold text-gray-800">Weight:</td>
            <td className="py-2 text-gray-600">250g</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 font-semibold text-gray-800">Dimensions:</td>
            <td className="py-2 text-gray-600">10 x 8 x 3 cm</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 font-semibold text-gray-800">Country:</td>
            <td className="py-2 text-gray-600">Made in USA</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}