"use client";

import Navbar from "@/components/Navbar";
import "./style.css";
import { motion } from "framer-motion";
import { Text } from "@/components/ui";
import { fadeIn, slideInLeft } from "@/utils/transitions";
import projects from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import ContactInfo from "@/components/ContactInfo";

export default function Projects() {
  return (
    <div className="projects-wrapper">
      <Navbar />
      <div className="projects-content">
        <motion.div {...fadeIn} transition={{ delay: 0.1 }}>
          <Text size="xl" weight="bold" className="text-white">
            My projects
          </Text>
          <Text size="sm" className="projects-description text-gray-400" italic>
            Here are my projects that I've worked on or I'm currently working on
          </Text>
        </motion.div>
        <motion.div
          {...slideInLeft}
          className="projects-grid"
          transition={{ delay: 0.2 }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
      <ContactInfo />
    </div>
  );
}
