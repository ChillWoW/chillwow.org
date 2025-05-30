import type { Config } from "tailwindcss";

export default {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px"
        },
        extend: {
            colors: {
                dark: {
                    50: "#C9C9C9",
                    100: "#b8b8b8",
                    200: "#828282",
                    300: "#696969",
                    400: "#424242",
                    500: "#3b3b3b",
                    600: "#2e2e2e",
                    700: "#242424",
                    800: "#1f1f1f",
                    900: "#141414"
                }
            }
        }
    },
    plugins: [require("tailwind-scrollbar")]
} satisfies Config;
