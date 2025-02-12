const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const slideInLeft = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
};

const popIn = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.5, ease: "easeOut" }
};

const rotateIn = {
    initial: { rotate: -10, opacity: 0 },
    animate: { rotate: 0, opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut" }
};

const staggerFadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.2 }
};

const bounceIn = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: [1.2, 0.9, 1], opacity: 1 },
    transition: { duration: 0.6, ease: "easeInOut" }
};

const wobble = {
    initial: { rotate: 0 },
    animate: { rotate: [0, -5, 5, -5, 5, 0] },
    transition: { duration: 0.8, ease: "easeInOut" }
};

const scaleOnHover = {
    whileHover: { scale: 1.1 },
    transition: { duration: 0.3, ease: "easeOut" }
};

const blurFadeIn = {
    initial: { opacity: 0, filter: "blur(10px)" },
    animate: { opacity: 1, filter: "blur(0px)" },
    transition: { duration: 0.6, ease: "easeOut" }
};

export {
    fadeIn,
    slideInLeft,
    popIn,
    rotateIn,
    staggerFadeIn,
    bounceIn,
    wobble,
    scaleOnHover,
    blurFadeIn
};
