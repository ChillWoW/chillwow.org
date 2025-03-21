export interface LoaderClassNames {
    container?: string;
}

export interface LoaderProps {
    size?: number;
    color?: string;
    speed?: number;
    stroke?: number;
    strokeLength?: number;
    bgOpacity?: number;
    className?: string;
    classNames?: LoaderClassNames;
}
