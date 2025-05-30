import { Text } from "@luminx/core";
import { IconBrandGithub, IconMail } from "@tabler/icons-react";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-dark-800 to-dark-900 border-t border-dark-600 py-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <Text className="text-sm text-dark-100" align="center">
                        © {new Date().getFullYear()} ChillWoW. Crafting websites
                        with passion and coffee.
                    </Text>
                    <div className="flex space-x-4 text-dark-100 text-xl">
                        <a
                            href="https://github.com/chillwow"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                        >
                            <IconBrandGithub />
                        </a>
                        <a
                            href="mailto:shilliwowi@gmail.com"
                            className="hover:text-white transition-colors"
                        >
                            <IconMail />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
