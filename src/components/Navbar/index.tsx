import { Text } from "@/components/ui";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-dark-800">
      <div className="w-full h-full flex items-center justify-center p-[20px]">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Text size="md" weight="bold" underline>
              Home
            </Text>
          </Link>
          <Link href="/projects">
            <Text size="md" weight="bold" underline>
              Projects
            </Text>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
