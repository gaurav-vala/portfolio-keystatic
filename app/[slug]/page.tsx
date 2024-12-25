import "../styles.css";
import React from "react";
import Markdoc from "@markdoc/markdoc";
import { reader } from "../reader";
import { markdocConfig } from "../../keystatic.config";

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const post = await reader.collections.posts.read(slug);

  if (!post) return <div>Post not found!</div>;

  // const { node } = await post.content();

  // const errors = Markdoc.validate(node, markdocConfig);
  // if (errors.length) {
  //   console.error(errors);
  //   throw new Error("Invalid content");
  // }

  // const renderable = Markdoc.transform(node, markdocConfig);

  return (
    <div className="px-5 prose lg:prose-lg prose-zinc prose-red dark:prose-invert dark:prose-p:text-white">
      <div className="mb-5">
        <h1>{post.title}</h1>
      </div>
      {/* {Markdoc.renderers.react(renderable, React)} */}
    </div>
  );
}

export async function generateStaticParams() {
  const slugs = await reader.collections.posts.list();

  return slugs.map((slug) => ({
    slug,
  }));
}
