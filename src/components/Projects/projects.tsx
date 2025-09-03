import {
    IconBrandGithub,
    IconBrandNpm,
    IconWorldWww
} from "@tabler/icons-react";

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
        name: "URL Shortener",
        description:
            "A URL shortener built with Next.js and Tailwind CSS. It's a simple URL shortener that allows you to shorten long URLs to a shorter one.",
        links: [
            {
                name: "Website",
                url: "https://url.chillwow.org",
                icon: <IconWorldWww />
            }
        ],
        status: "active"
    }
];
