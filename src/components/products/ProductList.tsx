import ProductCard from '@/components/home/ProductCard';
import { newProducts } from '@/data/dummy';

export default function ProductList() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
      {newProducts.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}