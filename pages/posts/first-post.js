import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <Link href={"/"}> Back to home</Link>
      <Image
        src="/images/profile_image.jpeg"
        height={144}
        width={144}
        alt="Profile Image"
      />
    </>
  );
}
