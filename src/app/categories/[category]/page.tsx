import { notFound } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/types/products';
import { getProducts } from '@/lib/products';

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const products: Product[] = await getProducts();
  const { category } = await params;
  const filtered = products.filter(p => {
    return p.category === decodeURIComponent(category);
  });

  if (filtered.length === 0) {
    notFound(); // встроенная 404
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Категория: {category}</h1>
      <div className="grid grid-cols-2 gap-4">
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
