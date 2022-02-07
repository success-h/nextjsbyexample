import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My</title>
      </Head>
      <h1>Blog</h1>
      <div className="">
        <Link href="/posts/first-post">
          <a className={styles.a}>See Blog</a>
        </Link>
      </div>
    </div>
  );
}
