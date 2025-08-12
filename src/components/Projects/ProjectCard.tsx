import { Anchor, Badge, Card, Text } from "@byteform/core";
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
        <Card className="relative bg-dark-800 border border-dark-700 p-4 h-full flex flex-col hover:scale-[1.01] transition-all duration-200">
            <div className="flex items-center justify-between">
                <h4 className="text-lg font-bold">{name}</h4>
                <Badge className={badgeConfig[status].className} size="md">
                    {badgeConfig[status].label}
                </Badge>
            </div>
            <Text className="text-dark-100 flex-grow">{description}</Text>

            {links.length > 0 && (
                <div className="absolute bottom-0 left-0 w-full flex items-center justify-center gap-3 pt-2 mb-2 border-t border-dark-600 mt-auto">
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
