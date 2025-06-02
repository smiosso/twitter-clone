'use client';

import { useState } from 'react';

export default function PostArea({ onPostSuccess }) {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePost = async () => {
    if (!content.trim()) return;

    setLoading(true);

    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content,
          author: 'Teste', // substitui depois por usuário logado
        }),
      });

      if (!res.ok) throw new Error('Failed to post');

      setContent('');
      onPostSuccess?.();
    } catch (error) {
      console.error('Error posting:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full border border-gray-700 rounded-xl p-4 bg-black text-white">
      <div className="flex gap-4 items-start">
        <img
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
          alt="avatar"
          className="w-12 h-12 rounded-full"
        />
        <textarea
          className="bg-black text-white w-full resize-none min-h-[60px] outline-none placeholder-gray-500"
          placeholder="What's happening?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div className="flex justify-end mt-4">
        <button
          onClick={handlePost}
          disabled={loading || !content.trim()}
          className={`px-6 py-2 rounded-full font-semibold transition ${
            loading || !content.trim()
              ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
              : 'bg-white text-black hover:bg-gray-300'
          }`}
        >
          {loading ? 'Posting...' : 'Post'}
        </button>
      </div>
    </div>
  );
}
