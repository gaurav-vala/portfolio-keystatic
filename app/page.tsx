import Header from "./components/Header";
import { reader } from "./reader";
import { FileUser, Github, Linkedin, Mail } from "lucide-react";

import "./styles.css";
import SingleProject from "./components/SingleProject";
import { use, useEffect, useState } from "react";
import Blogs from "./components/Blogs";

export default async function Homepage() {
  const skills = await reader.collections.skills.all();
  const projects = await reader.collections.projects.all();

  return (
    <>
      <Header />
      <section>
        <div className="flex items-center justify-between gap-4 md:flex-col-reverse md:items-start">
          <h1 className="w-full text-4xl italic font-black dark:text-white max-w-[600px]">
            Hey! Welcome to my corner of the internet
          </h1>
          <img
            src="/images/pfp.webp"
            className="object-cover object-top w-24 md:w-40 rounded-xl aspect-auto"
            alt=""
          />
        </div>
        <p className="mt-4 leading-snug tracking-tight text-neutral-700 dark:text-neutral-300">
          I am <span className="italic">gaurav</span>, and this site is the
          platform or medium for me to share things I do and love. Here you will
          find my professional and personal interests. My work and hobbies. You
          can poke around and see what I am up to.
        </p>

        <div className="mt-4">
          <h2 className="font-serif text-xl italic font-black text-red-500">
            find my work/contact me
          </h2>
          <div className="flex flex-wrap items-center gap-2 mt-2">
            <a
              href="https://github.com/gaurav-vala"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-2 py-1 border rounded-md w-fit border-neutral-300 dark:border-neutral-700 bg-neutral-400/5 dark:bg-neutral-700 dark:text-neutral-50"
            >
              <Github /> <span>Github</span>
            </a>
            <a
              href="https://drive.google.com/file/d/1FCnGGdwwRGwifGl03xxB3GNfyDv7an5F/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-2 py-1 border rounded-md w-fit border-neutral-300 dark:border-neutral-700 bg-neutral-400/5 dark:bg-neutral-700 dark:text-neutral-50"
            >
              <FileUser /> <span>Resume</span>
            </a>
            <a
              href="https://linkedin.com/in/gaurav-vala"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-2 py-1 border rounded-md w-fit border-neutral-300 dark:border-neutral-700 bg-neutral-400/5 dark:bg-neutral-700 dark:text-neutral-50"
            >
              <Linkedin /> <span>LinkedIn</span>
            </a>
            <a
              href="mailto:gauravvala492@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-2 py-1 border rounded-md w-fit border-neutral-300 dark:border-neutral-700 bg-neutral-400/5 dark:bg-neutral-700 dark:text-neutral-50"
            >
              <Mail /> <span>Email</span>
            </a>
          </div>
        </div>
      </section>
      <section>
        <div className="mt-4">
          <h2 className="font-serif text-xl italic font-black text-red-500">
            my skills
          </h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {
              // @ts-ignore
              skills.map((skill) => (
                <p
                  key={skill.slug}
                  className="px-2 py-1 font-serif font-bold border rounded-sm border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-50"
                >
                  {skill.entry.title}
                </p>
              ))
            }
          </div>
        </div>
      </section>
      <section className="mt-6">
        <h2 className="font-serif text-xl italic font-black text-red-500">
          my projects
        </h2>

        <div className="flex flex-col gap-4 mt-2">
          {
            // @ts-ignore
            projects.map((project) => (
              <SingleProject key={project.slug} {...project} />
            ))
          }
        </div>
      </section>
      <section className="mt-6">
        <h2 className="font-serif text-xl italic font-black text-red-500">
          my blogs
        </h2>

        <Blogs />
      </section>
    </>
  );
}
