import {
    IconBrandGit,
    IconBrandNextjs,
    IconBrandPython,
    IconBrandReact,
    IconBrandTailwind,
    IconBrandTypescript
} from "@tabler/icons-react";
import SkillCard from "./SkillCard";
import { SimpleGrid } from "@byteform/core";

export default function Skills() {
    return (
        <SimpleGrid
            breakpoints={{
                sm: 1,
                md: 2,
                lg: 3
            }}
        >
            <SkillCard
                name="Typescript"
                icon={<IconBrandTypescript />}
                className="bg-blue-500/20 text-blue-200"
            />
            <SkillCard
                name="React"
                icon={<IconBrandReact />}
                className="bg-blue-500/20 text-blue-200"
            />
            <SkillCard
                name="Next.js"
                icon={<IconBrandNextjs />}
                className="bg-gray-500/20 text-gray-200"
            />
            <SkillCard
                name="Git"
                icon={<IconBrandGit />}
                className="bg-red-500/20 text-red-200"
            />
            <SkillCard
                name="Tailwind CSS"
                icon={<IconBrandTailwind />}
                className="bg-blue-500/20 text-blue-200"
            />
            <SkillCard
                name="Python"
                icon={<IconBrandPython />}
                className="bg-yellow-500/20 text-yellow-200"
            />
        </SimpleGrid>
    );
}
