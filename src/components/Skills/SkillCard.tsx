import { Icon } from "@luminx/core";

interface SkillCardProps {
    name: string;
    icon: React.ReactNode;
    className?: string;
}

export default function SkillCard({ name, icon, className }: SkillCardProps) {
    return (
        <div className="bg-dark-800 p-4 rounded-md shadow-md hover:scale-[1.01] transition-all duration-300">
            <div className="flex items-center gap-2">
                <Icon className={className}>{icon}</Icon>
                <h3 className="text-lg font-bold">{name}</h3>
            </div>
        </div>
    );
}
