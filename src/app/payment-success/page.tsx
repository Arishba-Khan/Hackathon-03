'use client';

import { CheckCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface IParams {
  searchParams: Promise<{ amount: number }>;
}

const PaymentSuccess = ({ searchParams }: IParams) => {
  const router = useRouter();
  const [amount, setAmount] = useState<number | null>(null);

  useEffect(() => {
    const fetchSearchParams = async () => {
      try {
        const params = await searchParams;
        if (params && params.amount) {
          setAmount(params.amount);
        } else {
          router.push('/'); // Redirect to home or another page
        }
      } catch (error) {
        console.error('Failed to fetch search params:', error);
        router.push('/'); // Redirect to home or another page
      }
    };

    fetchSearchParams();
  }, [searchParams, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <CheckCircle className="text-green-500 w-16 h-16 mb-4" />
      <h1 className="text-4xl font-bold mb-2">Payment Successful</h1>
      {amount !== null ? (
        <p className="text-lg">Thank you for your purchase</p>
      ) : (
        <p className="text-lg">Loading...</p>
      )}
      <button
        onClick={() => router.push('/')}
        className="mt-6 px-4 py-2 bg-black text-white rounded-3xl font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-colors"
      >
        Go to Home
      </button>
    </div>
  );
};

export default PaymentSuccess;