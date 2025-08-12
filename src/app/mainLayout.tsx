"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "@byteform/core";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MainLayout({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider theme="dark">
            <Navbar />

            <div className="bg-gradient-to-b from-dark-800 to-dark-900 text-white min-h-screen px-8 pt-24">
                <div className="w-full max-w-6xl mx-auto">{children}</div>
            </div>

            <Footer />
        </ThemeProvider>
    );
}
