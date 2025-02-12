"use client";

import Navbar from "@/components/Navbar";
import { Button, Text } from "@/components/ui";
import { IconDashboard } from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn, slideInLeft } from "@/utils/transitions";
import PersonalInfo from "@/components/PersonalInfo";
import "./style.css";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="wrapper">
      <Navbar />
      <main className="content">
        <motion.div {...fadeIn} className="section">
          <div className="flex flex-col">
            <Text size="xl" weight="bold" className="text-white">
              Hi, I'm Eeka
            </Text>
            <Text size="md" className="text-gray-300" italic>
              I'm a full stack developer
            </Text>

            <motion.div {...slideInLeft} className="flex mt-10">
              <PersonalInfo />
            </motion.div>
          </div>
        </motion.div>

        <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="section">
          <Skills />
        </motion.div>

        <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="section">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <Text size="xl" weight="bold" className="text-white">
                Some of my projects
              </Text>
              <Text
                size="sm"
                className="projects-description text-gray-300"
                italic
              >
                Here are some of my projects that I've worked on or I'm
                currently working on
              </Text>
            </div>
            <Link href="/projects">
              <Button>All Projects</Button>
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
