import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Useless Web Things</title>
        <meta name="description" content="Let's make the web a little bit more fun" />
      </Head>

      <Link href="/things/clicks">Click Counter</Link>
    </>
  );
};

export default Home;
