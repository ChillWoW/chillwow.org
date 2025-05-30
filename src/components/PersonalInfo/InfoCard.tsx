import { Icon, Text } from "@luminx/core";

interface InfoCardProps {
    icon: React.ReactNode;
    title: string;
    value: string;
}

export default function InfoCard({ icon, title, value }: InfoCardProps) {
    return (
        <div className="flex flex-col items-center justify-center gap-2 bg-dark-800 p-4 rounded-lg">
            <Icon className="bg-transparent text-[var(--luminx-blue-5)]">
                {icon}
            </Icon>
            <div className="flex flex-col gap-2">
                <Text
                    size="md"
                    weight="semibold"
                    className="text-gray-300"
                    align="center"
                >
                    {title}
                </Text>
                <Text
                    size="md"
                    weight="bold"
                    className="text-gray-100"
                    align="center"
                >
                    {value}
                </Text>
            </div>
        </div>
    );
}
