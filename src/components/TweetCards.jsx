export default function TweetCards({ tweet }) {
  return (
    <div className="w-full border border-gray-300 p-4">
      <p className="pb-2 text-white">{tweet.content}</p>
      <div className="flex justify-between text-sm text-gray-400">
        <span>@{tweet.author}</span>
        <span>{new Date(tweet.createdAt).toLocaleString()}</span>
      </div>
    </div>
  );
}
