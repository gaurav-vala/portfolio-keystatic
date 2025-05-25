import React from "react";
import "../styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CodeBlock from "../components/CodeBlock";
import { reader } from "../reader";
import Markdoc from "@markdoc/markdoc";
import { markdocConfig } from "../../keystatic.config";

const Experience = async () => {
  const post = await reader.collections.uses.read("uses");
  if (!post) {
    return <div>Post not found!</div>;
  }
  const content = await post.content();
  const parsedContent = Markdoc.parse(content);
  const errors = Markdoc.validate(parsedContent, markdocConfig);
  if (errors.length) {
    console.error(errors);
    throw new Error("Invalid content");
  }
  const renderable = Markdoc.transform(parsedContent, markdocConfig);

  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-236px)]">
        <section className="mb-5">
          <h2 className="text-3xl italic font-black text-red-500">/Uses</h2>
          <p className="mt-2 text-sm font-medium leading-snug tracking-tight text-black dark:text-neutral-300">
            These are the collection of thing I use on daily bases? or the tools
            I like to use
          </p>
        </section>
        <section className="prose-sm prose prose-strong:underline prose-strong:italic md:prose-lg prose-red prose-headings:text-red-500 prose-headings:underline prose-li:my-4">
          {Markdoc.renderers.react(renderable, React, {
            components: {
              code: ({ children, language }: { children: string; language?: string }) => (
                <CodeBlock language={language}>{children}</CodeBlock>
              )
            }
          })}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Experience;
