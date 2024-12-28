import React from "react";
import { reader } from "../../reader";

import "../styles.css";
import SingleProject from "../../components/SingleProject";

const Projects = async () => {
  const projects = await reader.collections.projects.all();

  return (
    <>
      <section className="mb-5">
        <h2 className="text-3xl italic font-black text-red-500">My Projects</h2>
        <p className="mt-2 text-sm font-medium leading-snug tracking-tight text-black dark:text-neutral-300">
          I am exploring new things and building stuff. Here are some of the
          projects I have worked on. Most of the time I am either curious or
          trying to solve some problem I have.
        </p>
      </section>
      <div className="flex flex-col gap-4 mt-2">
        {
          // @ts-ignore
          projects.map((project) => (
            <SingleProject key={project.slug} {...project} />
          ))
        }
      </div>
    </>
  );
};

export default Projects;
