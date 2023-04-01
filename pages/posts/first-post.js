import Link from "next/link";
import Image from "next/image";
export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <Link href={"/"}> Back to home</Link>
      <Image src="/images/profile_image.jpeg" height={144} width={144} />
    </>
  );
}
