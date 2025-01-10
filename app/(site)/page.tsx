import Header from "../components/Header";
import { reader } from "../reader";
import {
  FileUser,
  Github,
  Linkedin,
  LucideAArrowDown,
  Mail,
} from "lucide-react";

import "./styles.css";
import SingleProject from "../components/SingleProject";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import Link from "next/link";

const SocialLink = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-2 px-2 py-1 text-sm border rounded-md text-neutral-800 w-fit border-neutral-300 dark:border-neutral-700 bg-neutral-400/5 dark:bg-neutral-700 dark:text-neutral-50"
  >
    <Icon /> <span className="">{label}</span>
  </a>
);

const SocialLinks = () => (
  <div className="flex flex-wrap items-center gap-2 mt-2">
    {[
      { href: "https://github.com/gaurav-vala", icon: Github, label: "Github" },
      {
        href: "https://drive.google.com/file/d/1FCnGGdwwRGwifGl03xxB3GNfyDv7an5F/view?usp=drive_link",
        icon: FileUser,
        label: "Resume",
      },
      {
        href: "https://linkedin.com/in/gaurav-vala",
        icon: Linkedin,
        label: "LinkedIn",
      },
      { href: "mailto:gauravvala492@gmail.com", icon: Mail, label: "Email" },
    ].map((link) => (
      <SocialLink key={link.href} {...link} />
    ))}
  </div>
);

export default async function Homepage() {
  const skills = await reader.collections.skills.all();
  const projects = await reader.collections.projects.all();

  return (
    <>
      <section>
        <div className="flex items-center justify-between gap-4 md:flex-col-reverse md:items-start">
          <h1 className="w-full text-4xl font-serif font-black tracking-tight dark:text-white md:max-w-full max-w-[600px]">
            Hey!
            <span className="font-serif italic tracking-tight">
              {" "}
              welcome{" "}
            </span>{" "}
            to my corner of the{" "}
            <span className="font-serif italic"> internet</span>
          </h1>
          <img
            src="/images/pfp.webp"
            className="object-cover object-top w-24 md:w-40 rounded-xl aspect-auto"
            alt="Profile Picture"
          />
        </div>
        <p className="mt-4 text-sm font-medium leading-snug tracking-tight md:text-base text-neutral-700 dark:text-neutral-300">
          I am gaurav, and this site is the platform or medium for me to share
          things I do and love. Here you will find my professional and personal
          interests, my work, and hobbies. You can poke around and see what I am
          up to.
        </p>

        <div className="mt-4">
          <h2 className="font-serif text-xl italic font-black text-red-500">
            Find my work/contact me
          </h2>
          <SocialLinks />
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
            projects.map(
              (project) =>
                project.entry.onhomepage && (
                  <SingleProject key={project.slug} {...project} />
                )
            )
          }
          <Link
            href="/projects"
            className="font-serif italic font-black tracking-tight underline underline-offset-1 text-neutral-600"
          >
            view all projects
          </Link>
        </div>
      </section>
      <section className="mt-6">
        <h2 className="font-serif text-xl italic font-black text-red-500">
          my blogs
        </h2>

        <Blogs count={10} />
      </section>
    </>
  );
}
