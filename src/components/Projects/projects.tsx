import { IconBrandGithub, IconBrandNpm, IconWorld } from "@tabler/icons-react";

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
        name: "LuminX",
        description:
            "A modern, responsive, and customizable UI library for React.",
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
            },
            {
                name: "Website",
                url: "https://ui.chillwow.org",
                icon: <IconWorld />
            }
        ],
        status: "active"
    }
];
