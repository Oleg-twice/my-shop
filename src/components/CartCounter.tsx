'use client'
import React from 'react';
import { useCartStore } from '@/store/cart';
import Link from 'next/link';

export default function CartCounter() {
  const items = useCartStore((state) => state.items);
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link
      href="/cart"
      className="relative p-2 rounded-full cursor-pointer inline-flex"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m4-9v9m5-9l2 9"
        />
      </svg>
      {totalCount > 0 && (
        <span className="absolute -top-1 -right-1 inline-flex items-center justify-center h-5 w-5 text-xs font-semibold text-white bg-red-600 rounded-full">
          {totalCount}
        </span>
      )}
    </Link>
  );
}
