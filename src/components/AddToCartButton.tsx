'use client';

import { useCartStore } from "@/store/cart";
import { Product } from '@/types/products'; 

export default function AddToCartButton({ product }: { product: Product }) {
  const  addToCart = useCartStore((state) => state.addToCart);

  return (
    <button
      onClick={() => {
        console.log(product, 'iiiii')
        addToCart(product);
      }}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
    >
      Добавить в корзину
    </button>
  );
}
