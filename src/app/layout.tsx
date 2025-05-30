import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import MainLayout from "./mainLayout";

const roboto = Roboto({
    weight: ["400", "500", "700"],
    subsets: ["latin"]
});

export const metadata: Metadata = {
    title: "ChillWoW",
    description: "Information about me"
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fi">
            <body className={`${roboto.className} antialiased`}>
                <MainLayout>{children}</MainLayout>
            </body>
        </html>
    );
}
