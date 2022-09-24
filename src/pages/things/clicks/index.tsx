import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../../../utils/trpc";

const ClicksIndex: NextPage = () => {
  return (
    <>
      <Head>
        <title>Click Counter - Useless Web Things</title>
        <meta name="description" content="Let's make the web a little bit more fun" />
      </Head>
    </>
  );
};

export default ClicksIndex;
