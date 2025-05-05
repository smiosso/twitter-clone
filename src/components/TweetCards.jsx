
// Esse código define um componente TweetCards que recebe um objeto tweet como prop

export default function TweetCards({ tweet }) {
    return (
        <div className="w-full border border-gray-300 p-4">
            <h3 className="font-bold pb-4 text-white">{tweet.title} </h3>
            <p className="pb-4 text-white">{tweet.body} </p>
            <p className="text-gray-600 font-semibold text-right">{tweet.tags.join(", ")}</p>
        </div>
    )
}