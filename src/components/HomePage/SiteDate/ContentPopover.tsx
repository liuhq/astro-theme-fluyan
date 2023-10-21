import { Popover, PopoverSurface, PopoverTrigger } from "@fluentui/react-components";
import type { ReactElement, ReactNode } from "react";

export default function ContentPopover({ trigger, surface, iconRef }: Props) {
    return (
        <Popover mountNode={ document.querySelector("#popover-layout") }
                 closeOnIframeFocus={ true }
                 closeOnScroll={ true }
                 positioning={ { target: iconRef, position: "below" } }
                 withArrow
        >
            <PopoverTrigger children={ trigger } />
            <PopoverSurface children={ surface } />
        </Popover>
    );
}

interface Props {
    trigger: ReactElement;
    surface: ReactNode;
    iconRef: HTMLSpanElement | null;
}
