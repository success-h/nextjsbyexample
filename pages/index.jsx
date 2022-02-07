import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { getPosts } from "../lib/posts";
import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  const posts = await getPosts();
  console.log("posts:", posts);
  return {
    props: { posts },
  };
}

export default function Home({ posts }) {
  console.log("posts:", posts);
  return (
    <div>
      <h1>Blog</h1>
      {posts.map(({ slug, title, date }) => (
        <div key={slug}>
          <Head>
            <title>{title}</title>
          </Head>
          <div className="" key={slug}>
            <Link href={`/posts/${slug}`}>
              <a style={{ cursor: "pointer", color: "blue" }}>{title}</a>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
