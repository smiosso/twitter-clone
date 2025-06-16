'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setError('');
    try {
      await login(username, password);
      router.push('/');
    } catch (err) {
      setError(err.message || 'Login failed. Again. I swear the code worked yesterday 😩💻');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 text-white">
      <h2 className="text-2xl mb-4">Login</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <input
        type="text"
        placeholder="who are you?"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full p-2 mb-2 bg-black border border-gray-500 rounded"
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mb-4 bg-black border border-gray-500 rounded"
      />
      <button
        onClick={handleLogin}
        className="w-full bg-white text-black font-bold py-2 rounded"
      >
        Login
      </button>

      <p className="mt-4 text-center">
        New dev?{' '}
        <Link href="/register" className="text-blue-400 hover:underline">
          Create chaos. ⚙️🔥
        </Link>
      </p>
    </div>
  );
}
