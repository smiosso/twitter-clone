'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getTweets } from '@/lib/api';
import PostArea from '@/components/PostArea';
import TweetCards from '@/components/TweetCards';
import MainLayout from '@/components/MainLayout';
import Sidebar from '@/components/Sidebar';
import Modal from '@/components/Modal';
import { useAuth } from '@/contexts/AuthContext';

export default function HomePage() {
  const { user, loading } = useAuth();
  const [tweets, setTweets] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const loadTweets = async () => {
    const data = await getTweets();
    setTweets(data);
  };

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
    if (!loading && user) {
      loadTweets();
    }
  }, [user, loading]);

  // Evita flash de tela branca ou redirecionamento antes do AuthContext terminar de verificar
  if (loading) return <p className="text-white text-center mt-4">Carregando sessão...</p>;
  if (!user) return null;

  return (
    <MainLayout>
      <Sidebar onOpenModal={() => setIsModalOpen(true)} />

      <h1 className="font-copse text-xl font-bold">For you. And your 87 bugs 🐞</h1>

      <PostArea onPostSuccess={loadTweets} />

      {tweets.length === 0 ? (
        <p className="text-white text-center mt-4">Zero. Nada. Just like my confidence 😶</p>
      ) : (
        tweets.map((tweet) => <TweetCards key={tweet._id} tweet={tweet} />)
      )}

      {isModalOpen && (
        <Modal
          onClose={() => setIsModalOpen(false)}
          onPostSuccess={() => {
            loadTweets();
            setIsModalOpen(false);
          }}
        />
      )}
    </MainLayout>
  );
}
