// components/AuthButton.tsx
'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

export default function AuthButton() {
  const { data: session } = useSession();

  return session ? (
    <button onClick={() => signOut()} className="bg-red-600 cursor-pointer rounded-lg p-2 text-white">
      Выйти
    </button>
  ) : (
    <button onClick={() => signIn('github')} className="bg-blue-600 cursor-pointer rounded-lg p-2 text-white">
      Войти
    </button>
  );
}
