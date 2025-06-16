'use client';

import { useAuth } from '@/contexts/AuthContext';

export default function PostButton({ content, onPostSuccess }) {
  const { user } = useAuth();

  const handlePost = async () => {
    if (!user) {
      alert('You must be logged in to post!');
      return;
    }

    const res = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({
        content,
        author: user._id || user.id,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      alert('Send. Crash. Cry. 😢');
      return;
    }

    onPostSuccess?.();
  };

  if (!user) return null;

  return (
    <button
      onClick={handlePost}
      className="font-copse px-4 ml-auto gap-2 self-end border mt-4 bg-white text-black py-2 justify-center rounded-full hover:bg-gray-300 transition"
    >
      Push the chaos. 🚀
    </button>
  );
}
