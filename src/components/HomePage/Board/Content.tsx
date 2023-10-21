import { Body1, Body1Stronger } from "@fluentui/react-components";
import type { ReactNode } from "react";

export default function Content({ children, active, className }: {
    children: ReactNode,
    active: boolean,
    className?: string
}) {
    const attr = className ? { className } : {};

    return (
        <>
            {
                active
                ? <Body1Stronger block { ...attr }>{ children }</Body1Stronger>
                : <Body1 block { ...attr }>{ children }</Body1>
            }
        </>
    );
}
