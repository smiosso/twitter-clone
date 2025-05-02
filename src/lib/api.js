// one file for fetch api

export async function getTweets() {
    const res = await fetch("https://dummyjson.com/posts");
    if (!res.ok) throw new Error("Failed to fetch tweets");
    return res.json();
  }
  
  export async function getTweet(id) {
    const res = await fetch(`https://dummyjson.com/posts/${id}`);
    if (!res.ok) throw new Error("Failed to fetch tweet");
    return res.json();
  }
  