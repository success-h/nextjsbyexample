import Head from "next/head";
import React from "react";
import { getPost, getSlugs } from "../../lib/posts";

export async function getStaticPaths() {
  const slugs = await getSlugs();
  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const post = await getPost(slug);
  return {
    props: { post },
  };
}

const PostPage = ({ post }) => {
  console.log("[first props] render:", post);
  const { title, date, body } = post;

  return (
    <div>
      <Head>
        <title>{title} - Success blog</title>
      </Head>
      <main>
        <h1>{title}</h1>
        <p>{date}</p>
        <article dangerouslySetInnerHTML={{ __html: body }} />
      </main>
    </div>
  );
};

export default PostPage;
