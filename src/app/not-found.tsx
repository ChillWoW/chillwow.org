"use client";

import { Anchor, Text } from "@byteform/core";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <Text size="3xl" weight="bold" className="text-white">
                404
            </Text>
            <Text className="text-dark-100">
                Nothing found. Go back to the{" "}
                <Anchor href="/" className="text-blue-500">
                    home page
                </Anchor>
            </Text>
        </div>
    );
}
