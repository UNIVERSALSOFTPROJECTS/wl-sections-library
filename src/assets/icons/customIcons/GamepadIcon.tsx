import type { SVGProps } from "react";

export const GamepadIcon = ({
    width = 16,
    height = 16,
    ...props
}: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden
        {...props}
    >
        <g clipPath="url(#clip0_gamepad_icon)">
            <path
                d="M3.99878 7.33099H6.6646"
                stroke="currentColor"
                strokeWidth="1.33291"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M5.33154 5.99811V8.66392"
                stroke="currentColor"
                strokeWidth="1.33291"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M9.99683 7.99744H10.0035"
                stroke="currentColor"
                strokeWidth="1.33291"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M11.9961 6.66455H12.0028"
                stroke="currentColor"
                strokeWidth="1.33291"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M11.5431 3.33228H4.45201C3.79241 3.33243 3.15628 3.57711 2.66661 4.01903C2.17693 4.46095 1.86847 5.06872 1.80086 5.72485C1.79686 5.7595 1.79419 5.79216 1.78953 5.82615C1.73555 6.27534 1.33301 9.63427 1.33301 10.6633C1.33301 11.1935 1.54365 11.7021 1.91861 12.077C2.29356 12.452 2.80211 12.6626 3.33237 12.6626C3.99882 12.6626 4.33205 12.3294 4.66528 11.9962L5.60764 11.0538C5.85756 10.8038 6.19653 10.6633 6.55001 10.6633H9.44509C9.79857 10.6633 10.1375 10.8038 10.3875 11.0538L11.3298 11.9962C11.663 12.3294 11.9963 12.6626 12.6627 12.6626C13.193 12.6626 13.7015 12.452 14.0765 12.077C14.4514 11.7021 14.6621 11.1935 14.6621 10.6633C14.6621 9.6336 14.2596 6.27534 14.2056 5.82615C14.2009 5.79282 14.1982 5.7595 14.1942 5.72551C14.1268 5.06926 13.8184 4.46133 13.3287 4.01928C12.839 3.57722 12.2028 3.33245 11.5431 3.33228Z"
                stroke="currentColor"
                strokeWidth="1.33291"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </g>
        <defs>
            <clipPath id="clip0_gamepad_icon">
                <rect width="15.9949" height="15.9949" fill="currentColor" />
            </clipPath>
        </defs>
    </svg>
);
