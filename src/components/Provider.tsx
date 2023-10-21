import { FluentProvider, makeStyles, tokens, webLightTheme } from "@fluentui/react-components";
import type { ReactNode } from "react";

export default function Provider({ children }: Props) {
    const styles = useStyles();

    return (
        <FluentProvider className={ styles.base }
                        theme={ webLightTheme }
        >
            <div id={ "popover-layout" } className={ styles.pop }>
                { children }
            </div>
        </FluentProvider>
    );
}

interface Props {
    children: ReactNode;
}

const useStyles = makeStyles({
    base: {
        backgroundColor: tokens.colorNeutralBackground3,
        minHeight: "100vh"
    },
    pop: {
        "& > *": {
            zIndex: 999
        }
    }
});
