"use client";

import PersonalInfo from "@/components/PersonalInfo";
import Skills from "@/components/Skills";
import { Transition, Text, Button } from "@byteform/core";
import { IconArrowDown, IconBrandGithub, IconMail } from "@tabler/icons-react";

export default function Main() {
    return (
        <>
            <section className="py-12 min-h-screen flex flex-col justify-center items-center">
                <Transition mounted={true} transition="slide-up" duration={800}>
                    {(styles) => (
                        <div
                            className="flex flex-col gap-3 mb-3"
                            style={styles}
                        >
                            <div className="flex flex-col items-center justify-center">
                                <Text
                                    size="4xl"
                                    weight="bold"
                                    className="text-white leading-tight"
                                >
                                    Hi, I'm Eeka
                                </Text>
                                <Text size="md" className="text-dark-200">
                                    Full Stack Developer
                                </Text>
                            </div>
                        </div>
                    )}
                </Transition>

                <Transition
                    mounted={true}
                    transition="slide-up"
                    enterDelay={400}
                    duration={600}
                >
                    {(styles) => (
                        <div
                            className="flex items-center justify-center gap-2"
                            style={styles}
                        >
                            <Button
                                component="a"
                                href="https://github.com/ChillWoW"
                                leftSection={<IconBrandGithub size={20} />}
                            >
                                GitHub
                            </Button>
                            <Button
                                component="a"
                                href="mailto:shilliwowi@gmail.com"
                                rightSection={<IconMail size={20} />}
                            >
                                Email
                            </Button>
                        </div>
                    )}
                </Transition>

                <Transition
                    mounted={true}
                    transition="fade"
                    enterDelay={800}
                    duration={600}
                >
                    {(styles) => (
                        <div style={styles} className="pt-12">
                            <IconArrowDown
                                size={40}
                                className="text-dark-100 animate-bounce mx-auto"
                            />
                        </div>
                    )}
                </Transition>
            </section>

            <main className="py-12">
                <Transition
                    mounted={true}
                    transition="fade"
                    enterDelay={200}
                    duration={600}
                >
                    {(styles) => (
                        <section className="mb-24" style={styles}>
                            <div className="text-center mb-16">
                                <Text
                                    size="3xl"
                                    weight="bold"
                                    className="text-white"
                                    align="center"
                                >
                                    Get to know me better
                                </Text>
                                <Text
                                    size="lg"
                                    className="text-dark-100 max-w-2xl mx-auto"
                                    align="center"
                                >
                                    Here's some information about my background,
                                    education, and where I'm based.
                                </Text>
                            </div>

                            <PersonalInfo />
                        </section>
                    )}
                </Transition>

                <Transition
                    mounted={true}
                    transition="fade"
                    enterDelay={400}
                    duration={600}
                >
                    {(styles) => (
                        <section className="mb-24" style={styles}>
                            <div className="text-center mb-16">
                                <Text
                                    size="3xl"
                                    weight="bold"
                                    className="text-white"
                                    align="center"
                                >
                                    Techinal skills
                                </Text>
                                <Text
                                    size="lg"
                                    className="text-dark-100 max-w-2xl mx-auto"
                                    align="center"
                                >
                                    Here is all the programming languages,
                                    frameworks, and tools I use to build
                                    applications.
                                </Text>
                            </div>

                            <Skills />
                        </section>
                    )}
                </Transition>
            </main>
        </>
    );
}
