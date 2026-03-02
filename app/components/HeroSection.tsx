import React from "react";
import Link from "next/link";
import { Github, Globe, FileText, Linkedin, Mail } from "lucide-react";
import SkillsSection from "./SkillsSection";

const SocialLink = ({
    href,
    icon: IconComp,
    label,
}: {
    href: string;
    icon: React.ComponentType<{ className?: string }>;
    label: string;
}) => (
    <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 px-2 py-1 text-base border border-dashed rounded-md text-neutral-800 w-fit border-neutral-400 dark:border-neutral-700 bg-neutral-400/15 dark:bg-neutral-700/15 dark:text-neutral-50"
    >
        <IconComp className="size-5" />
        <span>{label}</span>
    </a>
);

const SOCIAL_LINKS = [
    { href: "https://github.com/gaurav-vala", icon: Github, label: "Github" },
    {
        href: "https://drive.google.com/file/d/13QTkWkvh-f7DHVG6c6NnKZXGG7IbvS2o/view?usp=sharing",
        icon: FileText,
        label: "Resume",
    },
    { href: "https://linkedin.com/in/gaurav-vala", icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:gauravvala492@gmail.com", icon: Mail, label: "Email" },
];

export default function HeroSection() {
    return (
        <>
            <section>
                <div className="flex items-center justify-between gap-4 md:flex-col-reverse md:items-start">
                    <h1 className="w-full text-4xl font-serif font-black tracking-tight dark:text-neutral-200 md:max-w-full max-w-150">
                        Hey!
                        <span className="font-serif italic tracking-tight"> welcome </span>
                        to my corner of the
                        <span className="font-serif italic"> internet</span>
                    </h1>
                    <img
                        src="/images/pfp1.webp"
                        className="object-cover object-top w-24 md:w-40 rounded-xl aspect-auto"
                        alt="Profile Picture"
                    />
                </div>

                <p className="mt-4 text-sm font-medium leading-snug tracking-tight md:text-base text-neutral-700 dark:text-neutral-300!">
                    I am gaurav, and this site is the platform or medium for me to share things I do and love.
                    Here you will find my professional and personal interests, my work, and hobbies. You can
                    poke around and see what I am up to.
                </p>

                <div className="mt-4">
                    <h2 className="font-serif text-xl italic font-black text-red-500">
                        Find my work/contact me
                    </h2>
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                        {SOCIAL_LINKS.map((link) => (
                            <SocialLink key={link.href} {...link} />
                        ))}
                    </div>
                </div>
            </section>
            <SkillsSection />
        </>
    );
}
