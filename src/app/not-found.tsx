"use client";

import Navbar from "@/components/Navbar";
import { Text } from "@/components/ui";
import { usePathname } from "next/navigation";
import "./style.css";

export default function NotFound() {
  const pathname = usePathname();

  return (
    <div className="wrapper">
      <Navbar />
      <div className="h-screen flex items-center justify-center flex-col">
        <Text size="xl" weight="bold">
          Something went wrong
        </Text>
        <Text size="md">404 | Page Not Found: {pathname}</Text>
      </div>
    </div>
  );
}
