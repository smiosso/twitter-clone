export default function TweetCards({ tweet }) {
  return (
    <div className="bg-black text-white mb-4 flex border border-gray-300 p-4">
      {/* Coluna da esquerda: Avatar + username */}
      <div className="flex flex-col items-center w-24 mr-4">
        <img
          src={tweet.author.avatar}
          alt="Avatar"
          className="w-12 h-12 rounded-full object-cover mb-2"
        />
        <h2 className="text-sm font-bold text-center">@{tweet.author.username}</h2>
      </div>

      {/* Conteúdo do tweet */}
      <div className="flex-1">
        <p>{tweet.content}</p>
      </div>
    </div>
  );
}
