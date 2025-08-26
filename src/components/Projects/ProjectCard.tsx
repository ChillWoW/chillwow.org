import { Anchor, Badge, Group, Text } from "@byteform/core";
import { Project } from "./projects";

const badgeConfig = {
    completed: {
        className: "bg-emerald-600/20 text-emerald-200",
        label: "Completed"
    },
    active: {
        className: "bg-blue-600/20 text-blue-200",
        label: "Active"
    },
    paused: {
        className: "bg-yellow-600/20 text-yellow-200",
        label: "Paused"
    },
    planned: {
        className: "bg-gray-600/20 text-gray-200",
        label: "Planned"
    },
    "not-maintained": {
        className: "bg-red-600/20 text-red-200",
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
        <div className="bg-dark-800 border border-dark-700 p-6 flex flex-col shadow-sm h-full">
            <Group justify="between" align="center" className="mb-4">
                <Text size="lg" weight="bold" className="text-white">
                    {name}
                </Text>
                <Badge className={badgeConfig[status].className} size="md">
                    {badgeConfig[status].label}
                </Badge>
            </Group>

            <Text className="text-dark-100 leading-relaxed flex-grow">
                {description}
            </Text>

            {links.length > 0 && (
                <div className="border-t border-dark-600 pt-4 mt-6">
                    <Group justify="center" align="center" gap="md">
                        {links.map((link) => (
                            <Anchor
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                underline="never"
                                className="flex items-center gap-2 text-dark-300 hover:text-blue-400 transition-colors duration-200 text-sm font-medium px-2 py-1 rounded hover:bg-dark-700/50"
                            >
                                <span className="text-lg">{link.icon}</span>
                                {link.name}
                            </Anchor>
                        ))}
                    </Group>
                </div>
            )}
        </div>
    );
}
