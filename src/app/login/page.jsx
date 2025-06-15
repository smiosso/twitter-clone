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
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    if (!res.ok) {
      setError(data.error || 'Erro ao fazer login');
      return;
    }

    login(data.user);  // atualiza o contexto e localStorage
    router.push('/');
  };

  return (
    <div className="max-w-md mx-auto mt-20 text-white">
      <h2 className="text-2xl mb-4">Login</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <input
        type="text"
        placeholder="Usuário"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full p-2 mb-2 bg-black border border-gray-500 rounded"
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mb-4 bg-black border border-gray-500 rounded"
      />
      <button
        onClick={handleLogin}
        className="w-full bg-white text-black font-bold py-2 rounded"
      >
        Entrar
      </button>

      <p className="mt-4 text-center">
        Ainda não tem uma conta?{' '}
        <Link href="/register" className="text-blue-400 hover:underline">
          Registre-se aqui
        </Link>
      </p>
    </div>
  );
}
