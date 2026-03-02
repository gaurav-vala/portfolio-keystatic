import { reader } from "@/app/reader";
import SingleProject from "./SingleProject";
import Link from "next/link";

export default async function ProjectsSection() {
    const rawProjects = await reader.collections.projects.all();
    const projects = [...rawProjects].sort((a, b) => {
        const aOrder = a.entry.order ?? Infinity;
        const bOrder = b.entry.order ?? Infinity;
        return aOrder - bOrder;
    });

    return (
        <section className="mt-6">
            <h2 className="font-serif text-xl italic font-black text-red-500">
                my projects
            </h2>

            <div className="flex flex-col gap-4 mt-2">
                {/* @ts-ignore */}
                {projects.map(
                    (project) =>
                        project.entry.onhomepage && (
                            <SingleProject key={project.slug} {...project} />
                        )
                )}
                <Link
                    href="/projects"
                    className="font-serif italic font-black tracking-tight underline underline-offset-1 text-neutral-600"
                >
                    view all projects
                </Link>
            </div>
        </section>
    );
}
