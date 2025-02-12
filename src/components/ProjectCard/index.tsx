import { Project } from "@/data/projects";
import "./style.css";
import { motion } from "framer-motion";
import Image from "next/image";
import { Badge, Button, Text, Tooltip } from "@/components/ui";
import { hexToRgba } from "@/utils/hexToRgba";
import {
    IconBrandDiscord,
    IconBrandGithub,
    IconCheck
} from "@tabler/icons-react";
import Link from "next/link";

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <motion.div className="project-card">
            <div className="project-card-image">
                {project.image ? (
                    <Image src={project.image} alt={project.title} fill />
                ) : (
                    <div className="project-card-image-placeholder">
                        <Text size="md" weight="bold">
                            No Image Provided
                        </Text>
                    </div>
                )}
                {project.status && (
                    <Badge
                        className="project-card-status"
                        color={
                            project.status === "completed"
                                ? hexToRgba("00FF00", 0.2)
                                : undefined
                        }
                    >
                        {project.status}
                    </Badge>
                )}
            </div>

            <div className="project-card-content">
                <Text size="lg" weight="bold">
                    {project.title}
                </Text>
                <Text size="sm" className="text-gray-300" italic>
                    {project.description}
                </Text>

                <div className="project-card-technologies">
                    {project.technologies.map((tech: any, i: any) => (
                        <Badge key={i} className="bg-dark-600">
                            {tech}
                        </Badge>
                    ))}
                </div>

                <div className="project-card-features">
                    {project.features.map((feature: any, i: any) => (
                        <div key={i} className="project-card-feature">
                            <IconCheck size={18} />
                            <Text size="sm">{feature}</Text>
                        </div>
                    ))}
                </div>

                <div className="project-card-links">
                    {project.github && (
                        <Tooltip label="View on GitHub" position="top">
                            <Link href={project.github} target="_blank">
                                <Button>
                                    <IconBrandGithub size={18} />
                                </Button>
                            </Link>
                        </Tooltip>
                    )}
                    {project.discord && (
                        <Tooltip label="Join Discord" position="top">
                            <Link href={project.discord} target="_blank">
                                <Button className="bg-blue-500 hover:bg-blue-600">
                                    <IconBrandDiscord size={18} />
                                </Button>
                            </Link>
                        </Tooltip>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
