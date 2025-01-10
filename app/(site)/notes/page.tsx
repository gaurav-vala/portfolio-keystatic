import React from "react";
import { reader } from "../../reader";

import "../styles.css";

const Notes = async () => {
  const projects = await reader.collections.notes.all();

  return (
    <>
      <main className="min-h-[calc(100vh-236px)]">
        <section className="mb-5">
          <h2 className="text-3xl italic font-black text-red-500">My Notes</h2>
          <p className="mt-2 text-sm font-medium leading-snug tracking-tight text-black dark:text-neutral-300">
            I want to differentiate between my blogs and notes. Notes are more
            random and just anything that I want to write about.
          </p>
        </section>
        <ul>
          {
            // @ts-ignore
            projects.map((project) => (
              <li
                key={project.slug}
                className="py-2 border-b border-neutral-300 dark:border-neutral-700"
              >
                <a
                  className="font-serif text-xl font-bold text-neutral-700"
                  href={`/notes/${project.slug}`}
                >
                  {project.entry.title}
                </a>
              </li>
            ))
          }
        </ul>
      </main>
    </>
  );
};

export default Notes;
