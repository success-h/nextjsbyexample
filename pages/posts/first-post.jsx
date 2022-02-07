import Head from "next/head";
import React from "react";
import { getPost } from "../../lib/posts";

export async function getStaticProps() {
  const post = await getPost("first-post");
  return {
    props: { post },
  };
}

const FirstPostPage = ({ post }) => {
  console.log("[first props] render:", post);

  return (
    <div>
      <Head>
        <title>{post.title} - my blog</title>
      </Head>
      <p>{post.date}</p>
      <h1>{post.title} -Success Blog</h1>
      <article dangerouslySetInnerHTML={{ __html: post.body }} />
    </div>
  );
};

export default FirstPostPage;
