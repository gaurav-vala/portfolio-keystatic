"use client";

import React, { useState } from "react";
import { Globe, Twitter, Github, Linkedin, ChevronDown, ChevronUp } from "lucide-react";
import { TECH_ICONS } from "@/lib/tech-icons";

interface ExperienceEntry {
    companyName: string | null;
    jobTitle: string | null;
    location: string | null;
    duration: string;
    description?: string | null;
    technologies?: string[] | null;
    isFeatured?: boolean | null;
    logo?: string | null;
    websiteUrl?: string | null;
    twitterUrl?: string | null;
    githubUrl?: string | null;
    linkedinUrl?: string | null;
}

interface Experience {
    slug: string;
    entry: ExperienceEntry;
}

interface ExperienceListProps {
    experiences: Experience[];
}

function ExperienceRow({ exp }: { exp: Experience }) {
    const [expanded, setExpanded] = useState(false);
    const hasTech = exp.entry.technologies && exp.entry.technologies.length > 0;
    const hasDesc = !!exp.entry.description;
    const hasDetails = hasTech || hasDesc;

    return (
        <div className="border-b border-dashed border-neutral-200 dark:border-neutral-800 last:border-b-0">
            {/* Header row */}
            <div className="flex items-center justify-between gap-4 px-4 py-3 hover:bg-neutral-50 dark:hover:bg-neutral-800/30 transition-colors">
                <div className="flex items-center gap-3 min-w-0">
                    <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-semibold text-sm text-neutral-900 dark:text-neutral-100">
                                {exp.entry.companyName}
                            </span>
                            <div className="flex items-center gap-1">
                                {exp.entry.websiteUrl && (
                                    <a href={exp.entry.websiteUrl} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                                        <Globe className="size-3.5 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors" />
                                    </a>
                                )}
                                {exp.entry.twitterUrl && (
                                    <a href={exp.entry.twitterUrl} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                                        <Twitter className="size-3.5 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors" />
                                    </a>
                                )}
                                {exp.entry.linkedinUrl && (
                                    <a href={exp.entry.linkedinUrl} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                                        <Linkedin className="size-3.5 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors" />
                                    </a>
                                )}
                                {exp.entry.githubUrl && (
                                    <a href={exp.entry.githubUrl} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                                        <Github className="size-3.5 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors" />
                                    </a>
                                )}
                            </div>
                        </div>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400">{exp.entry.jobTitle}</p>
                    </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                    <div className="text-right hidden sm:block">
                        <p className="text-xs text-neutral-600 dark:text-neutral-300">{exp.entry.duration}</p>
                        <p className="text-xs text-neutral-400 dark:text-neutral-500">{exp.entry.location}</p>
                    </div>
                    {hasDetails && (
                        <button
                            onClick={() => setExpanded((v) => !v)}
                            aria-label={expanded ? "Collapse details" : "Expand details"}
                            className="flex items-center justify-center gap-1 text-xs text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 transition-colors border border-dashed border-neutral-300 dark:border-neutral-700 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 size-6 shrink-0"
                        >
                            {expanded ? (
                                <ChevronUp className="size-4" />
                            ) : (
                                <ChevronDown className="size-4" />
                            )}
                        </button>
                    )}
                </div>
            </div>

            {/* Mobile date/location */}
            <div className="sm:hidden px-4 pb-2 -mt-1">
                <p className="text-xs text-neutral-600 dark:text-neutral-300">{exp.entry.duration}</p>
                <p className="text-xs text-neutral-400 dark:text-neutral-500">{exp.entry.location}</p>
            </div>

            {/* Expanded details */}
            {expanded && hasDetails && (
                <div className="px-4 pb-4 space-y-3 border-t border-dashed border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30">
                    {hasTech && (
                        <div className="pt-3">
                            <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2">
                                Technologies &amp; Tools
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {exp.entry.technologies!.map((tech) => {
                                    const TechIcon = TECH_ICONS[tech];
                                    return (
                                        <span
                                            key={tech}
                                            className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 border border-dashed border-neutral-300 dark:border-neutral-700 rounded-md bg-white dark:bg-neutral-800/50 text-neutral-700 dark:text-neutral-300"
                                        >
                                            {TechIcon && <TechIcon className="size-3.5 shrink-0" />}
                                            {tech}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {hasDesc && (
                        <div className={hasTech ? "" : "pt-3"}>
                            <div className="space-y-1.5">
                                {exp.entry.description!.split("\n").map((line, i) => (
                                    <p key={i} className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                        {line}
                                    </p>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default function ExperienceList({ experiences }: ExperienceListProps) {
    if (!experiences.length) return null;

    return (
        <div className="border border-dashed border-neutral-300 dark:border-neutral-700 rounded-xl overflow-hidden">
            {experiences.map((exp) => (
                <ExperienceRow key={exp.slug} exp={exp} />
            ))}
        </div>
    );
}
