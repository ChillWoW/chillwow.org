import { Text } from "@/components/ui";
import Link from "next/link";
import "./style.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-content">
                <Link href="/" className="navbar-link">
                    <Text size="md" weight="bold">
                        Home
                    </Text>
                </Link>
                <Link href="/projects" className="navbar-link">
                    <Text size="md" weight="bold">
                        Projects
                    </Text>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
