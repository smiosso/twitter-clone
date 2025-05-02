

import { getTweets } from "@/lib/api";
import TweetCard from "@/components/TweetCards";
import Link from "next/link";
import PostArea from "@/components/PostArea";
import MainLayout from "@/components/MainLayout";

export default async function Home() {
  const tweets = await getTweets();

  return (
    <MainLayout>
      <h1 className="font-bold text-xl">For you</h1>
      <PostArea />
      <ul className="flex flex-col gap-6">
        {tweets.posts.map((tweet) => (
          <Link href={`/tweet/${tweet.id}`} key={tweet.id}>
            <TweetCard tweet={tweet} />
          </Link>
        ))}
      </ul>
    </MainLayout>
  );
}
