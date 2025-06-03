'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getTweets } from '@/lib/api';
import PostArea from '@/components/PostArea';
import TweetCards from '@/components/TweetCards';
import MainLayout from '@/components/MainLayout';

export default function HomePage() {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const loadTweets = async () => {
    setLoading(true);
    const data = await getTweets();
    setTweets(data);
    setLoading(false);
  };

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      router.push('/login');
    } else {
      setIsLoggedIn(true);
      loadTweets();
    }
  }, []);

  if (!isLoggedIn) return null; // Evita piscar a tela até verificar login

  return (
    <MainLayout>
      <h1 className="text-xl font-bold">For you</h1>
      <PostArea onPostSuccess={loadTweets} />
      {loading ? (
        <p className="text-white text-center mt-4">Loading tweets...</p>
      ) : (
        tweets.map((tweet) => <TweetCards key={tweet._id} tweet={tweet} />)
      )}
    </MainLayout>
  );
}
