'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import PostButton from './PostButton';
import { useAuth } from '@/contexts/AuthContext';

export default function Modal({ onClose, onPostSuccess }) {
  const [content, setContent] = useState('');
  const { user } = useAuth();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-brightness-20">
      <div className="bg-black text-white rounded-xl p-6 w-full max-w-xl relative shadow-lg">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
          onClick={onClose}
        >
          <X size={18} />
        </button>

        <header className="flex flex-col p-4">
          <div className="flex items-center gap-4">
            <img
              src={user?.avatar || 'https://api.dicebear.com/7.x/avataaars/svg?seed=default'}
              alt="avatar"
              className="w-12 h-12 rounded-full"
            />
            <textarea
              className="text-white w-full h-7 px-2"
              placeholder={user ? `Hello ${user.username}, Why are u crying?` : "Why are u crying?"}
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
      </div>
    </div>
  );
}
