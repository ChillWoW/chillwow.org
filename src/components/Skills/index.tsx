import { Text } from "@/components/ui";
import skills from "@/data/skills";
import { motion } from "framer-motion";
import { slideInLeft } from "@/utils/transitions";
import { hexToRgba } from "@/utils/hexToRgba";
import "./style.css";

export default function Skills() {
  return (
    <div className="skills-wrapper">
      <div className="skills-texts">
        <Text size="xl" weight="bold" className="text-white">
          Current Tools I Use
        </Text>
        <Text size="sm" className="text-gray-400" italic>
          These are my current tools for development.
        </Text>
      </div>

      <motion.div {...slideInLeft} transition={{ delay: 0.3 }}>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-box">
              <div
                className="skill-icon"
                style={{
                  backgroundColor: hexToRgba(skill.color, 0.1),
                }}
              >
                {skill.icon}
              </div>

              <div className="skill-content">
                <Text>{skill.name}</Text>
                <Text size="sm" color="dimmed">
                  {skill.description}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
