import { reader } from "@/app/reader";
import { TECH_ICONS } from "@/lib/tech-icons";
import ExperienceList from "./ExperienceList";
import { Globe, Twitter, Github, Linkedin } from "lucide-react";

export default async function ExperienceSection() {
    const experiences = await reader.collections.experience.all();
    const featured = experiences.find((e) => e.entry.isFeatured);
    const others = experiences.filter((e) => !e.entry.isFeatured);

    return (
        <section className="mt-8">
            <h2 className="font-serif text-xl italic font-black text-red-500 pb-4">
                experience
            </h2>

            {/* Featured card */}
            {featured && (
                <div className="border border-dashed border-neutral-300 dark:border-neutral-700 rounded-xl p-4 mb-4">
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div>
                                <div className="flex items-center gap-2 flex-wrap">
                                    <span className="font-bold text-neutral-900 dark:text-neutral-100">
                                        {featured.entry.companyName}
                                    </span>
                                    <div className="flex items-center gap-1.5">
                                        {featured.entry.websiteUrl && (
                                            <a href={featured.entry.websiteUrl} target="_blank" rel="noreferrer">
                                                <Globe className="size-4 text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors" />
                                            </a>
                                        )}
                                        {featured.entry.twitterUrl && (
                                            <a href={featured.entry.twitterUrl} target="_blank" rel="noreferrer">
                                                <Twitter className="size-4 text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors" />
                                            </a>
                                        )}
                                        {featured.entry.githubUrl && (
                                            <a href={featured.entry.githubUrl} target="_blank" rel="noreferrer">
                                                <Github className="size-4 text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors" />
                                            </a>
                                        )}
                                        {featured.entry.linkedinUrl && (
                                            <a href={featured.entry.linkedinUrl} target="_blank" rel="noreferrer">
                                                <Linkedin className="size-4 text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors" />
                                            </a>
                                        )}
                                    </div>
                                    <span className="flex items-center gap-1 text-xs font-semibold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800 px-2 py-0.5 rounded-full">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                        Working
                                    </span>
                                </div>
                                <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">
                                    {featured.entry.jobTitle}
                                </p>
                            </div>
                        </div>
                        <div className="text-right shrink-0 hidden sm:block">
                            <p className="text-sm text-neutral-600 dark:text-neutral-300">{featured.entry.duration}</p>
                            <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-0.5">{featured.entry.location}</p>
                        </div>
                    </div>

                    {/* Mobile date/location */}
                    <div className="sm:hidden mt-2">
                        <p className="text-sm text-neutral-600 dark:text-neutral-300">{featured.entry.duration}</p>
                        <p className="text-xs text-neutral-400 dark:text-neutral-500">{featured.entry.location}</p>
                    </div>

                    {/* Technologies */}
                    {featured.entry.technologies && featured.entry.technologies.length > 0 && (
                        <div className="mt-4">
                            <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2">
                                Technologies &amp; Tools
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {featured.entry.technologies.map((tech) => {
                                    const TechIcon = TECH_ICONS[tech];
                                    return (
                                        <span
                                            key={tech}
                                            className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 border border-dashed border-neutral-300 dark:border-neutral-700 rounded-md bg-neutral-50 dark:bg-neutral-800/50 text-neutral-700 dark:text-neutral-300"
                                        >
                                            {TechIcon && <TechIcon className="size-3.5 shrink-0" />}
                                            {tech}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* Description */}
                    {featured.entry.description && (
                        <div className="mt-4 space-y-1.5">
                            {featured.entry.description.split("\n").map((line, i) => (
                                <p key={i} className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                    {line}
                                </p>
                            ))}
                        </div>
                    )}
                </div>
            )}

            {/* Other experiences (expandable client component) */}
            <ExperienceList experiences={others as any} />
        </section>
    );
}
