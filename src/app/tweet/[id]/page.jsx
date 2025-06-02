// Esse código busca os detalhes de um tweet com base no id passado nos
// parâmetros da URL, usando a função getTweet. Em seguida, renderiza
// esse tweet dentro do componente TweetCards e o exibe dentro do layout
// principal MainLayout.

import { getTweet } from "@/lib/api";
import TweetCards from "@/components/TweetCards";
import MainLayout from "@/components/MainLayout";

export default async function TweetDetail({ params }) {
  const tweet = await getTweet(params.id);

  return (
    <MainLayout>
      <TweetCards tweet={tweet} />
    </MainLayout>
  );
}
