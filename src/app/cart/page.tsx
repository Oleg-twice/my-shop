'use client';

import AuthButton from '@/components/AuthButton';
import { useCartStore } from '@/store/cart';
import { useSession } from 'next-auth/react';

export default function CartPage() {
  const { items, removeFromCart, clearCart } = useCartStore();

  const { data: session, status } = useSession();

  if (status === 'loading') return <p>Загрузка...</p>;
  if (!session) return <p>Пожалуйста, войдите для оформления заказа. <AuthButton /></p>;


  if (items.length === 0) return <p>Корзина пуста</p>;

  const handleSubmit = async () => {
    const res = await fetch('/api/place-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ items }),
    });
  
    if (!res.ok) {
      alert('Ошибка при оформлении заказа');
      return;
    }
  
    clearCart();
    alert('Заказ успешно оформлен!');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Ваша корзина</h1>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.id} className="flex justify-between items-center border-b pb-2">
            <div>
              <p>{item.title}</p>
              <p>Кол-во: {item.quantity}</p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:underline"
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={handleSubmit}
        className="bg-green-600 cursor-pointer p-3 text-white rounded-md mt-20">Оформить заказ</button>
    </div>
  );
}
