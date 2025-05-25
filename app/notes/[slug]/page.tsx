import "../../styles.css";
import React from "react";
import Markdoc from "@markdoc/markdoc";
import { reader } from "../../reader";
import { markdocConfig } from "../../../keystatic.config";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CodeBlock from "../../components/CodeBlock";

type PostParams = {
  params: {
    slug: string;
  };
};

export default async function Post({ params }: PostParams) {
  const { slug } = params;

  // Fetch the post
  const post = await reader.collections.notes.read(slug);

  if (!post) {
    return <div>Post not found!</div>;
  }

  // Get the content string from the post
  const content = await post.content();

  // Parse the content if it's a string (assuming it's Markdoc-compatible Markdown or similar)
  const parsedContent = Markdoc.parse(content);

  // Validate the content with Markdoc configuration
  const errors = Markdoc.validate(parsedContent, markdocConfig);
  if (errors.length) {
    console.error(errors);
    throw new Error("Invalid content");
  }

  // Transform the parsed content into a renderable object
  const renderable = Markdoc.transform(parsedContent, markdocConfig);

  // Render the content using Markdoc's React renderer
  return (
    <>
      <Header />
      <article className="w-full max-w-full prose-sm prose prose-code:font-mono prose-red min-h-[calc(100vh-236px)] prose-p:tracking-tighter">
        <div className="mb-5">
          <h1 className="text-4xl italic font-black">{post.title}</h1>
        </div>
        <hr className="mt-2 border-neutral-300" />
        {Markdoc.renderers.react(renderable, React, {
          components: {
            code: ({ children, language }: { children: string; language?: string }) => (
              <CodeBlock language={language}>{children}</CodeBlock>
            )
          }
        })}
      </article>
      <Footer />
    </>
  );
}

export async function generateStaticParams() {
  const slugs = await reader.collections.notes.list();

  return slugs.map((slug) => ({
    slug,
  }));
}
