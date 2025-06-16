'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    setError('');
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    if (!res.ok) {
      setError(data.error || 'New user? Not today. 🚫');
      return;
    }

    router.push('/login');
  };

  return (
    <div className="max-w-md mx-auto mt-20 text-white">
      <h2 className="text-2xl mb-4">New here? Good luck 🍀</h2>
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
        className="w-full p-2 mb-2 bg-black border border-gray-500 rounded"
      />
      <button
        onClick={handleRegister}
        className="w-full bg-white text-black font-bold py-2 rounded"
      >
        New dev?
      </button>
    </div>
  );
}
