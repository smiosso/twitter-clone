'use client';

import { useState, useEffect } from 'react';

export default function PostArea({ onPostSuccess }) {
  const [content, setContent] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const handlePost = async () => {
    if (!user) {
      alert('You must be logged in to post!');
      return;
    }

    const res = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({
        content,
        author: user.name
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!res.ok) throw new Error('Failed to post');

    setContent('');
    onPostSuccess?.();
  };

  if (!user) return null; // esconde se não tiver login

  return (
    <header className="flex flex-col border border-gray-300 p-4">
      <div className="flex items-center gap-4">
        <img src={user.avatar} alt="avatar" className="w-12 h-12 rounded-full" />
        <textarea
          className="text-white w-full h-7 px-2"
          placeholder="What's happening?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button
        onClick={handlePost}
        className="px-4 ml-auto gap-2 self-end border mt-4 bg-white text-black font-semibold py-2 justify-center rounded-full hover:bg-gray-300 transition"
      >
        Post
      </button>
    </header>
  );
}
