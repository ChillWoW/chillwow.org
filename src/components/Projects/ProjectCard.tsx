import { Anchor, Badge, Card, Text, Title } from "@luminx/core";
import { Project } from "./projects";

const badgeConfig = {
    completed: {
        className: "bg-[var(--luminx-green-light-5)]",
        label: "Completed"
    },
    active: {
        className: "bg-[var(--luminx-blue-light-5)]",
        label: "Active"
    },
    paused: {
        className: "bg-[var(--luminx-yellow-light-5)]",
        label: "Paused"
    },
    planned: {
        className: "bg-[var(--luminx-gray-light-5)]",
        label: "Planned"
    },
    "not-maintained": {
        className: "bg-[var(--luminx-red-light-5)]",
        label: "Not Maintained"
    }
};

export default function ProjectCard({
    name,
    description,
    links,
    status
}: Project) {
    return (
        <Card className="bg-dark-800 border border-dark-700 p-4 h-full flex flex-col hover:scale-[1.01] transition-all duration-200">
            <div className="flex items-center justify-between">
                <Title weight="bold" order={4}>
                    {name}
                </Title>
                <Badge className={badgeConfig[status].className}>
                    {badgeConfig[status].label}
                </Badge>
            </div>
            <Text className="text-dark-100 mb-3 flex-grow">{description}</Text>

            {links.length > 0 && (
                <div className="flex items-center gap-3 pt-2 border-t border-dark-700 mt-auto">
                    {links.map((link) => (
                        <Anchor
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            underline="never"
                            className="flex items-center gap-2 text-dark-300 hover:text-white transition-colors duration-200 text-sm"
                        >
                            {link.icon}
                            {link.name}
                        </Anchor>
                    ))}
                </div>
            )}
        </Card>
    );
}
