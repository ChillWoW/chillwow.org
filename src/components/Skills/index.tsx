import {
    IconBrandGit,
    IconBrandNextjs,
    IconBrandPython,
    IconBrandReact,
    IconBrandTailwind,
    IconBrandTypescript
} from "@tabler/icons-react";
import SkillCard from "./SkillCard";

export default function Skills() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <SkillCard
                name="Typescript"
                icon={<IconBrandTypescript />}
                className="bg-[var(--luminx-blue-light-5)] text-white"
            />
            <SkillCard
                name="React"
                icon={<IconBrandReact />}
                className="bg-[var(--luminx-blue-light-2)] text-white"
            />
            <SkillCard
                name="Next.js"
                icon={<IconBrandNextjs />}
                className="bg-[var(--luminx-dark-5)] text-white"
            />
            <SkillCard
                name="Git"
                icon={<IconBrandGit />}
                className="bg-[var(--luminx-red-light-5)] text-white"
            />
            <SkillCard
                name="Tailwind CSS"
                icon={<IconBrandTailwind />}
                className="bg-[var(--luminx-blue-light-5)] text-white"
            />
            <SkillCard
                name="Python"
                icon={<IconBrandPython />}
                className="bg-[var(--luminx-yellow-light-5)] text-white"
            />
        </div>
    );
}
