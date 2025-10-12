import { Metadata } from 'next';
import ProductDetailClient from './ProductDetailClient';
import { newProducts } from '@/data/dummy';
import { CartProvider } from '@/contexts/CartContext';

interface ProductDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const productId = parseInt(id, 10);
  const product = newProducts.find(p => p.id === productId);

  return {
    title: product ? `${product.productName} - Watch Web` : 'Product Not Found',
    description: product?.productInfo || 'Product details'
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params;
  const productId = parseInt(id, 10);
  const relatedProducts = newProducts
    .filter(p => p.id !== productId)
    .slice(0, 4);
    
  return (
    <CartProvider>
      <ProductDetailClient 
        productId={productId} 
        relatedProducts={relatedProducts} 
      />
    </CartProvider>
  );
}