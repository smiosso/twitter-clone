"use client";

import TweetCard from "@/components/TweetCards";
import Link from "next/link";
import PostArea from "@/components/PostArea";

async function getTweets() {
  const res = await fetch("https://dummyjson.com/posts");
  return res.json();
}

export default async function Home() {
  const tweets = await getTweets();

  return (
    <div className="flex w-full h-screen text-white font-[family-name:var(--font-geist-sans)] bg-black">
      {/* Feed */}

      <main className="w-[60%] h-screen p-8 bg-black sm:p-20 flex flex-col gap-8">

        <h1 className="font-bold text-xl">For you</h1>

        <PostArea />

        <ul className="flex flex-col gap-6">
          {tweets.posts.map((tweet) => (
            <Link href={`/tweet/${tweet.id}`} key={tweet.id}>
              <TweetCard tweet={tweet} />
            </Link>
          ))}
        </ul>
      </main>

      {/* Lado direito acompanha o scroll */}
      <aside className="w-[20%] h-screen p-8 hidden md:block">
        {/* conteúdo futuro */}

      <div>
        <p>placeholder</p>
      </div>
      </aside>
    </div>
  );
}
