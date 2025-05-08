// app/checkout/actions.ts
'use server';

import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

type OrderItem = {
  id: number;
  title: string;
  quantity: number;
};

export async function placeOrder(items: OrderItem[]) {
  const session = await getServerSession(authOptions);

  console.log(session, 'session')

  if (!session) {
    throw new Error('Вы не авторизованы');
  }

  console.log('Новый заказ от', session.user?.email);
  console.log('Товары:', items);

  return { success: true };
}
