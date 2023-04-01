import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";
export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <h1>First Post</h1>
        <Link href={"/"}> Back to home</Link>
      </Layout>
    </>
  );
}
