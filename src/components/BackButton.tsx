'use client';
import { useRouter } from 'next/navigation';

const BackButton = () => {
  const router = useRouter();
  return (
    <button onClick={() => router.back()} className="text-blue-500 underline cursor-pointer">
      Назад
    </button>
  );
};

export default BackButton;
