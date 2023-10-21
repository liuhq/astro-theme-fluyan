import ContentPopover from "#components/HomePage/SiteDate/ContentPopover.tsx";
import {
    CompoundButton,
    compoundButtonClassNames,
    makeStyles,
    shorthands,
    type Slot,
    tokens
} from "@fluentui/react-components";
import type { ReactNode } from "react";
import { useState } from "react";

export default function SiteDateTemplate({ children, secondaryContent, popover, icon }: Props) {
    const styles = useStyles();
    const [iconRef, setIconRef] = useState<HTMLSpanElement | null>(null);

    return (
        <ContentPopover
            trigger={
                <CompoundButton
                    className={ styles.button }
                    appearance={ "subtle" }
                    children={ children }
                    icon={ { ref: setIconRef, children: icon } }
                    secondaryContent={ secondaryContent }
                    shape={ "rounded" }
                    size={ "medium" }
                />
            }
            surface={ popover }
            iconRef={ iconRef }
        />
    );
}

interface Props {
    children: ReactNode;
    secondaryContent: Slot<"span">;
    popover: ReactNode;
    // icon: Slot<"span">;
    icon: ReactNode;
}

const useStyles = makeStyles({
    button: {
        ...shorthands.padding(tokens.spacingHorizontalS),
        ":hover": {
            backgroundColor: tokens.colorNeutralBackground3Hover
        },
        ":active": {
            backgroundColor: tokens.colorNeutralBackground3Pressed
        },
        [`& .${ compoundButtonClassNames.contentContainer }`]: {
            paddingLeft: tokens.spacingHorizontalXS
        },
        [`& .${ compoundButtonClassNames.secondaryContent }`]: {
            paddingTop: tokens.spacingVerticalXS,
            paddingLeft: tokens.spacingHorizontalXXS
        }
    },
});
