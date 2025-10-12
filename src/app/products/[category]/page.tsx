// FILE: app/products/[category]/page.tsx
// BỎ 'use client' - đây là Server Component

import { Metadata } from 'next';
import CategoryPageClient from './CategoryPageClient';
import CartProgress from '@/components/cart/CartProgress';

interface CategoryPageProps {
  params: Promise<{ 
    category: string;
  }>;
}

// generateMetadata chỉ hoạt động trong Server Component
export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const categoryName = decodeURIComponent(category).replace(/-/g, ' ').toUpperCase();
  return {
    title: `${categoryName} - Anon`,
    description: `Browse our ${categoryName} collection`,
  };
}

// Server Component - chỉ render Client Component
export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  return <CategoryPageClient category={category} />;
}