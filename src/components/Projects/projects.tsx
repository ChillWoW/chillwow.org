import { IconBrandGithub, IconBrandNpm } from "@tabler/icons-react";

type ProjectStatus =
    | "completed"
    | "active"
    | "paused"
    | "planned"
    | "not-maintained";

interface Link {
    name: string;
    url: string;
    icon: React.ReactNode;
}

export interface Project {
    name: string;
    description: string;
    links: Link[];
    status: ProjectStatus;
}

export const projects: Project[] = [
    {
        name: "Byteform",
        description:
            "A responsive UI library for React, built with Tailwind CSS and TypeScript.",
        links: [
            {
                name: "GitHub",
                url: "https://github.com/byteformdev/byteform",
                icon: <IconBrandGithub />
            },
            {
                name: "NPM",
                url: "https://www.npmjs.com/package/@byteform/core",
                icon: <IconBrandNpm />
            }
        ],
        status: "active"
    },
    {
        name: "LuminX",
        description:
            "A modern, responsive, and customizable UI library for React. This was my first ever UI library and I learned a lot from it. Now deprecated in favor of Byteform.",
        links: [
            {
                name: "GitHub",
                url: "https://github.com/ChillWoW/luminx",
                icon: <IconBrandGithub />
            },
            {
                name: "NPM",
                url: "https://www.npmjs.com/package/@luminx/core",
                icon: <IconBrandNpm />
            }
        ],
        status: "not-maintained"
    }
];
