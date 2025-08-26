import { Group, Text } from "@byteform/core";

interface InfoCardProps {
    icon: React.ReactNode;
    title: string;
    value: string;
}

export default function InfoCard({ icon, title, value }: InfoCardProps) {
    return (
        <div className="flex flex-col items-center justify-center gap-2 bg-dark-800 p-4 rounded-md hover:scale-[1.01] transition-all duration-200">
            <div className="text-blue-400 pb-1">{icon}</div>
            <Group justify="center" align="center" gap="xs" direction="column">
                <Text
                    size="md"
                    weight="medium"
                    className="text-dark-100"
                    align="center"
                >
                    {title}
                </Text>
                <Text
                    size="md"
                    weight="bold"
                    className="text-white"
                    align="center"
                >
                    {value}
                </Text>
            </Group>
        </div>
    );
}
