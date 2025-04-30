

export default function TweetCard({ tweet }) {
    return (
        <li className="border border-gray-300 p-4">
            <h3 className="font-bold pb-4 font-white">{tweet.title} </h3>
            <p className="pb-4 font-white">{tweet.body} </p>
            <p className="text-gray-600 font-semibold text-right">{tweet.tags.join(", ")}</p>

        </li>
    )
}