// app/api/place-order/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req: NextRequest) {
  const session = await getServerSession({ req, ...authOptions });

  if (!session) {
    return NextResponse.json({ error: 'Вы не авторизованы' }, { status: 401 });
  }

  const body = await req.json();
  const items = body.items;

  console.log('Новый заказ от', session.user?.email);
  console.log('Товары:', items);

  return NextResponse.json({ success: true });
}
