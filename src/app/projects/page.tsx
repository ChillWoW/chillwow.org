"use client";

import { Text, Transition } from "@luminx/core";
import Projects from "@/components/Projects";

export default function Page() {
    return (
        <Transition
            mounted={true}
            transition="slide-up"
            enterDelay={600}
            duration={600}
        >
            {(styles) => (
                <section
                    className="py-12 flex flex-col justify-center items-center"
                    style={styles}
                >
                    <div className="text-center mb-16">
                        <Text
                            size="3xl"
                            weight="bold"
                            className="text-white"
                            align="center"
                        >
                            Projects I've built or been part of
                        </Text>
                        <Text
                            size="lg"
                            className="text-gray-400 max-w-2xl mx-auto"
                            align="center"
                        >
                            A showcase of my recent work, demonstrating my
                            skills in full-stack development and
                            problem-solving.
                        </Text>
                    </div>

                    <Projects />
                </section>
            )}
        </Transition>
    );
}
