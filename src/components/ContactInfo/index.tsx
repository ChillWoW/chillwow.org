import { motion } from "framer-motion";
import "./style.css";
import { Text } from "@/components/ui";
import { IconBrandGithub, IconMail } from "@tabler/icons-react";

export default function ContactInfo() {
  return (
    <section className="contact-info">
      <motion.div
        className="contact-info-content"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ width: "100%" }}
      >
        <Text size="xl" weight="bold">
          Contact me
        </Text>
        <div className="contact-info-grid">
          <motion.a href="mailto:shilliwowi@gmail.com" className="contact-card">
            <IconMail size={24} />
            <Text size="sm" className="text-gray-400">
              shilliwowi@gmail.com
            </Text>
          </motion.a>

          <motion.a
            href="https://github.com/ChillWoW"
            className="contact-card"
            target="_blank"
          >
            <IconBrandGithub size={24} />
            <Text size="sm" className="text-gray-400">
              @ChillWoW
            </Text>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
