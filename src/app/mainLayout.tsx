"use client";

import { ReactNode } from "react";
import { LuminXProvider } from "@luminx/core";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MainLayout({ children }: { children: ReactNode }) {
    return (
        <LuminXProvider theme="dark">
            <Navbar />

            <div className="bg-gradient-to-b from-dark-800 to-dark-900 min-h-screen px-8 pt-24">
                <div className="w-full max-w-6xl mx-auto">{children}</div>
            </div>
            <Footer />
        </LuminXProvider>
    );
}
