import React, { useEffect, useState } from "react";
import "../styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { reader } from "../reader";

interface ExperienceItem {
  companyName: string;
  jobTitle: string;
  location: string;
  duration: string;
  description: string;
  technologies: string[];
}

interface ExperienceData {
  slug: string;
  entry: ExperienceItem;
}

const SingleExperienceItem = ({ entry }) => {
  const {
    companyName,
    jobTitle,
    location,
    duration,
    description,
    technologies,
  } = entry;
  return (
    <div className="single_experience">
      <h3 className="text-lg font-bold leading-none text-cyan-500">
        {jobTitle} at{" "}
        <span className="italic text-neutral-500">{companyName}</span>
      </h3>
      <p className="text-sm font-medium text-neutral-500 dark:text-neutral-100">
        {duration}
      </p>
      <p className="text-sm font-medium text-neutral-500 dark:text-neutral-100">
        Location: {location}
      </p>
      {description !== "" && (
        <p className="py-4 text-sm leading-snug text-neutral-900">
          {description}
        </p>
      )}

      {technologies.length > 0 && (
        <div className="pt-2">
          <p className="mb-2 font-serif italic leading-none text-red-500">
            technologies i worked with
          </p>
          <div className="flex flex-wrap items-center gap-1 md:gap-2">
            {technologies.map((tech) => (
              <span className="px-1 font-mono text-xs font-normal text-blue-400 bg-blue-50">
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Experience = async () => {
  const experiences = await reader.collections.experience.all();

  // Sorting function
  const sortedExperience = experiences.sort((a, b) => {
    const extractDate = (duration: string): Date => {
      // Extracts end date and returns as Date object
      const endDate = duration.split(" - ")[1];
      if (endDate === "Present") return new Date(); // Treat "Present" as current date
      const [month, year] = endDate.split(" ");
      return new Date(`${year}-${new Date(`${month} 1`).getMonth() + 1}-01`);
    };

    return (
      extractDate(a.entry.duration).getTime() -
      extractDate(b.entry.duration).getTime()
    );
  });

  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-236px)]">
        <section className="mb-5">
          <h2 className="text-3xl italic font-black text-red-500">
            Experience
          </h2>
          <p className="mt-2 text-sm font-medium leading-snug tracking-tight text-black dark:text-neutral-300">
            This is a showcase of my professional experience, and although it is
            not much, I certainly am sure I have learned quite a lot.
          </p>
        </section>
        <section>
          {sortedExperience.map((experience, index) => (
            <SingleExperienceItem key={index} entry={experience.entry} />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Experience;
