import { reader } from "@/app/reader";
import { TECH_ICONS } from "@/lib/tech-icons";

export default async function SkillsSection() {
    const skills = await reader.collections.skills.all();

    return (
        <section>
            <div className="mt-4">
                <h2 className="font-serif text-xl italic font-black text-red-500">
                    tech i can work with
                </h2>
                <div className="flex flex-wrap gap-2 mt-2">
                    {skills.map((skill) => {
                        const TechIcon = TECH_ICONS[skill.entry.title];
                        return (
                            <span
                                key={skill.slug}
                                className="flex items-center gap-1.5 px-2.5 py-1 font-serif text-sm border border-dashed rounded-md bg-neutral-400/5 dark:bg-neutral-700/5 border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-50"
                            >
                                {TechIcon && <TechIcon className="size-4 shrink-0" />}
                                {skill.entry.title}
                            </span>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
