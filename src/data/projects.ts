import AetherisLogo from "./Aetheris.png";

export interface Project {
    title: string;
    description: string;
    image?: any;
    github?: string;
    discord?: string;
    technologies: string[];
    features: string[];
    status: "completed" | "in development" | "soon";
}

const projects: Project[] = [
    {
        title: "UI Components",
        description:
            "A collection of UI components for usage in any project. Feel free to use them in your projects.",
        github: "https://github.com/ChillWoW/ui-components",
        technologies: ["Typescript", "React", "Tailwind CSS"],
        features: [
            "Responsive design",
            "Customizable",
            "Easy to use",
            "Open Source"
        ],
        status: "completed"
    },
    {
        title: "Discord Bot Dashboard",
        description:
            "A dashboard for a discord bot that allows you to manage the bot and the settings of it.",
        image: "https://github.com/ChillWoW/discord-bot-dashboard/blob/main/preview.png?raw=true",
        github: "https://github.com/chillwow/discord-bot-dashboard",
        technologies: ["Typescript", "Next.js"],
        features: [
            "Responsive design",
            "Multi-language support",
            "Dashboard",
            "Many Customizable Functions"
        ],
        status: "in development"
    },
    {
        title: "Aetheris - Fivem Roleplay Server",
        description:
            "Aetheris is a FiveM roleplay server that is currently in development.",
        image: AetherisLogo,
        discord: "https://discord.gg/aDJA7WJhHe",
        technologies: ["Typescript", "React", "Lua"],
        features: [
            "Finnish",
            "Roleplay",
            "Simple Server For New People",
            "Nice Community"
        ],
        status: "in development"
    }
];

export default projects;
