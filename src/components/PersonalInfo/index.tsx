import { Text } from "@/components/ui";
import "./style.css";
import { IconCalendar, IconMapPin, IconSchool } from "@tabler/icons-react";

export default function PersonalInfo() {
    const RenderCard = ({
        icon,
        title,
        value
    }: {
        icon: React.ReactNode;
        title: string;
        value: string;
    }) => {
        return (
            <>
                <div className="info-card-icon text-gray-100">{icon}</div>
                <Text size="md" className="text-gray-100">
                    {title}
                </Text>
                <Text size="md" weight="semibold" className="text-gray-300">
                    {value}
                </Text>
            </>
        );
    };

    return (
        <>
            <div className="profile-card">
                <div className="info-card">
                    <RenderCard
                        icon={<IconCalendar size={24} />}
                        title="Age"
                        value="16"
                    />
                </div>
                <div className="info-card">
                    <RenderCard
                        icon={<IconSchool size={24} />}
                        title="Education"
                        value="Information And Communication Technology"
                    />
                </div>
                <div className="info-card">
                    <RenderCard
                        icon={<IconMapPin size={24} />}
                        title="Location"
                        value="Finland"
                    />
                </div>
            </div>
        </>
    );
}
