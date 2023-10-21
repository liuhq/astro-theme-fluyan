import UserConfig from "#/UserConfig.ts";
import NavAvatarPanel from "#components/NavBar/NavAvatarPanel.tsx";
import {
    Avatar,
    makeStyles,
    Popover,
    PopoverSurface,
    PopoverTrigger,
    shorthands,
    tokens
} from "@fluentui/react-components";

export default function NavAvatar() {
    const styles = useStyles();

    return (
        <Popover mountNode={ document.querySelector("#popover-layout") }
                 closeOnScroll={ true }
                 positioning={ {
                     position: "below",
                     align: "start",
                     overflowBoundary: document.querySelector("body"),
                     overflowBoundaryPadding: 8
                 } }
        >
            <PopoverTrigger>
                <div className={ styles.container }>
                    <Avatar image={ { src: UserConfig.avatar, alt: "avatar" } } />
                </div>
            </PopoverTrigger>
            <PopoverSurface>
                <NavAvatarPanel />
            </PopoverSurface>
        </Popover>
    );
}

const useStyles = makeStyles({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "48px",
        height: "48px",
        ...shorthands.borderRadius(tokens.borderRadiusMedium),
        ...shorthands.padding(0, tokens.spacingHorizontalXS),
        ":hover": {
            backgroundColor: tokens.colorNeutralBackground3Hover
        },
        ":active": {
            backgroundColor: tokens.colorNeutralBackground3Pressed
        }
    }
});
