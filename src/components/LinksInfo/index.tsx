import { IconBrandGithub, IconMail } from "@tabler/icons-react";
import { Button, Text } from "../ui";
import "./style.css";
import Link from "next/link";

export default function LinksInfo() {
    return (
        <div className="links-wrapper">
            <Link href="https://github.com/ChillWoW">
                <Button className="link-button">
                    <IconBrandGithub size={18} />
                    GitHub
                </Button>
            </Link>
            <Link href="mailto:shilliwowi@gmail.com">
                <Button className="link-button">
                    <IconMail size={18} />
                    Email
                </Button>
            </Link>
        </div>
    );
}
