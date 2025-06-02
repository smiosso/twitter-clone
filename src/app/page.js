'use client';

import { useEffect, useState } from 'react';
import { getTweets } from '@/lib/api';
import PostArea from '@/components/PostArea';
import TweetCards from '@/components/TweetCards';
import MainLayout from '@/components/MainLayout';

export default function HomePage() {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadTweets = async () => {
    setLoading(true);
    const data = await getTweets();
    setTweets(data);
    setLoading(false);
  };

  useEffect(() => {
    loadTweets();
  }, []);

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
