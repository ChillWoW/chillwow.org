"use client";

import { Anchor, Text, Title } from "@luminx/core";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <Title>404</Title>
            <Text>
                Nothing found. Go back to the{" "}
                <Anchor href="/">home page</Anchor>.
            </Text>
        </div>
    );
}
