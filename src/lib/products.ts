import { Product } from "@/types/products";

export const STORE_API = 'https://fakestoreapi.com';

export async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${STORE_API}/products`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}

export async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`${STORE_API}/products/${id}`);

  if (!res.ok) throw new Error('Failed to fetch product');
  return res.json();
}
