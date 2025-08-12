"use client";

import { Text, Transition } from "@byteform/core";
import Projects from "@/components/Projects";

export default function Page() {
    return (
        <Transition mounted={true} transition="slide-up" duration={600}>
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
                            className="text-gray-400 max-w-3xl mx-auto"
                            align="center"
                        >
                            Here you can find some of the projects I've worked
                            on. There are some projects that I've worked on in
                            the past but are no longer maintained and are
                            useless to add here.
                        </Text>
                    </div>

                    <Projects />
                </section>
            )}
        </Transition>
    );
}
