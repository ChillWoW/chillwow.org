"use client";

import { Anchor, cx, Text } from "@luminx/core";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks";

interface NavItem {
    href: string;
    label: string;
}

const navItems: NavItem[] = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" }
];

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < lastScrollY || currentScrollY === 0) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
                setIsVisible(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const isActive = (href: string) => pathname === href;

    return (
        <nav
            className={cx(
                "fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out backdrop-blur-sm",
                isVisible ? "translate-y-0" : "-translate-y-full"
            )}
            role="navigation"
            aria-label="Main navigation"
        >
            <div className="bg-dark-800 border-b border-dark-600">
                <div className="container mx-auto h-16 px-4 py-4 flex items-center">
                    <Anchor
                        href="/"
                        underline="never"
                        className={useIsMobile() ? "hidden" : ""}
                    >
                        <Text size="xl" weight="bold">
                            ChillWoW
                        </Text>
                    </Anchor>
                    <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-4">
                        {navItems.map((item) => (
                            <Anchor
                                key={item.href}
                                href={item.href}
                                underline="never"
                                className={cx(
                                    "text-sm font-medium px-3 py-2 rounded-md transition-colors",
                                    isActive(item.href)
                                        ? "text-white bg-dark-700"
                                        : "text-dark-100 hover:text-white hover:bg-dark-700"
                                )}
                                aria-current={
                                    isActive(item.href) ? "page" : undefined
                                }
                            >
                                {item.label}
                            </Anchor>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}
