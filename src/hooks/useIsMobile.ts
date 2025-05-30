import { useEffect, useState } from "react";

export const useIsMobile = (mobileBreakpoint: number = 768) => {
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < mobileBreakpoint);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, [mobileBreakpoint]);

    return isMobile;
};
