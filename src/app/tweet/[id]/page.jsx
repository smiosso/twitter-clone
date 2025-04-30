import TweetCards from "@/components/TweetCards";

async function getTweet(id) {
    const res = await fetch(`https://dummyjson.com/posts/${id}`);
    return res.json();
    
}


export default async function TweetDetail ({ params }) {
    const tweet = await getTweet(params.id)


    return (
    <main>
        <TweetCards tweet={tweet} />
    </main>
    )
}

