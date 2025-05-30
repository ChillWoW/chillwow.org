import { IconCalendar, IconMapPin, IconSchool } from "@tabler/icons-react";
import InfoCard from "./InfoCard";

function getAge(birthDateStr: string): number {
    const today = new Date();
    const birthDate = new Date(birthDateStr);
    let age = today.getFullYear() - birthDate.getFullYear();
    const hasBirthdayPassedThisYear =
        today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() &&
            today.getDate() >= birthDate.getDate());

    if (!hasBirthdayPassedThisYear) {
        age--;
    }

    return age;
}

export default function PersonalInfo() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InfoCard
                icon={<IconCalendar size={24} />}
                title="Age"
                value={`${getAge("2008-11-21")}`}
            />

            <InfoCard
                icon={<IconSchool size={24} />}
                title="Education"
                value="Information And Communication Technology"
            />

            <InfoCard
                icon={<IconMapPin size={24} />}
                title="Location"
                value="Finland"
            />
        </div>
    );
}
