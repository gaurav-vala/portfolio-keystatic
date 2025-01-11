import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { reader } from "../reader";

import "../styles.css";
import Markdoc from "@markdoc/markdoc";
import { markdocConfig } from "../../keystatic.config";

const About = async () => {
  const post = await reader.collections.aboutpage.read("about-me");
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
      <section className="min-h-[calc(100vh-236px)]">
        <div className="w-full prose prose-red prose-p:font-medium prose-p:leading-snug">
          {Markdoc.renderers.react(renderable, React)}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
