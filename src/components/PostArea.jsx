'use client';

import { useState } from 'react';
import PostButton from './PostButton';
import { useAuth } from '@/contexts/AuthContext';

export default function PostArea({ onPostSuccess }) {
  const { user } = useAuth();
  const [content, setContent] = useState('');

  return (
    <header className="flex flex-col border border-gray-300 p-4 rounded-xl">
      <div className="flex items-center gap-4">
        <textarea
          className="text-white w-full h-7 px-2"
          placeholder={user ? `Hello ${user.username}, what's happening?` : "What's happening?"}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <PostButton
        content={content}
        onPostSuccess={() => {
          setContent('');
          onPostSuccess?.();
        }}
      />
    </header>
  );
}
