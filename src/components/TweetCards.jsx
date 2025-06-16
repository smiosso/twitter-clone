import { useAuth } from '@/contexts/AuthContext';


export default function TweetCards({ tweet, onDelete }) {
  const author = tweet.author;

  if (!author || typeof author !== 'object') {
    return null; // ou exibir um card vazio
  }

  return (
    <div className="bg-black text-white mb-4 flex border border-gray-300 p-4 rounded-xl shadow">
      {/* Avatar e username */}
      <div className="flex flex-col items-center w-24 mr-4">
        <img
          src={author.avatar || '/default-avatar.png'}
          alt="Avatar"
          className="w-12 h-12 rounded-full object-cover mb-2"
        />
        <h2 className="text-sm font-bold text-center">@{author.username}</h2>
      </div>

      {/* Conteúdo do tweet */}
      <div className="flex-1">
        <p className="text-base">{tweet.content}</p>
        <p className="text-xs text-gray-400 mt-2">
          {new Date(tweet.createdAt).toLocaleString()}
        </p>
      </div>
    </div>
  );
}
