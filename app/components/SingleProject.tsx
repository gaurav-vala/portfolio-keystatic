import React from "react";

const SingleProject = ({ entry }) => {
  const technologies = entry.technologies
    .split(",")
    .map((item, i) => `${item}`);

  return (
    <div className="py-2 border-b rounded-sm border-neutral-300 dark:border-neutral-700">
      <h3 className="text-2xl font-black text-cyan-500">{entry.title}</h3>
      <p className="pt-2 text-sm tracking-tight text-neutral-700 dark:text-neutral-300">
        {entry.description}
      </p>
      <ul className="flex flex-wrap gap-2 pt-2">
        {technologies.map((tech) => (
          <li
            key={tech}
            className="p-1 font-mono text-xs leading-3 tracking-tighter text-red-400 border border-red-200 rounded-md dark:border-neutral-700"
          >
            {tech}
          </li>
        ))}
      </ul>

      {(entry.live || entry.github) && (
        <div className="flex gap-2 pt-3">
          {entry.live && (
            <a
              href={entry.live}
              target="_blank"
              rel="noreferrer"
              className="font-serif text-lg italic font-black underline dark:text-neutral-300"
            >
              View Project
            </a>
          )}
          {entry.github && (
            <a
              href={entry.github}
              target="_blank"
              rel="noreferrer"
              className="font-serif text-lg italic font-black underline dark:text-neutral-300"
            >
              View Code
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default SingleProject;
