import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Useless Web Things</title>
        <meta name="description" content="Let's make the web a little bit more fun" />
      </Head>
    </>
  );
};

export default Home;
