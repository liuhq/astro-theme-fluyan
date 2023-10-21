import UserConfig from "#/UserConfig.ts";
import NavAvatar from "#components/NavBar/NavAvatar.tsx";
import NavList from "#components/NavBar/NavList.tsx";
import SiteIcon from "#components/NavBar/SiteIcon.tsx";
import { getPathname } from "#lib/params.ts";
import { Divider, Link, makeStyles, shorthands, tokens } from "@fluentui/react-components";
import { Fluent24Filled } from "@fluentui/react-icons";

const { siteTitle } = UserConfig;

export default function NavBar() {
    const styles = useStyles();

    const reg = /^(\d+\/)+|^\d+$|^\/$/;
    const isHome = reg.test(getPathname(import.meta.env.BASE_URL, window.location.pathname));

    return (
        <div className={ styles.container }>
            <div className={ styles.container }>
                <SiteIcon siteTitle={ siteTitle } />
                <Divider appearance={ "strong" } vertical={ true } />
                <NavList />
            </div>
            <div className={ styles.container }>
                <Link className={ styles.fluent }
                      appearance={ "subtle" }
                      href={ "https://fluent2.microsoft.design/" }
                      target={ "_blank" }
                >
                    <Fluent24Filled />
                </Link>
                {
                    isHome ||
                    <NavAvatar />
                }
            </div>
        </div>
    );
}

const useStyles = makeStyles({
    container: {
        display: "flex",
        justifyContent: "space-between",
        justifyItems: "center",
        alignItems: "center",
        userSelect: "none",
        height: "48px",
        backgroundColor: tokens.colorNeutralBackground3,
        ...shorthands.gap(tokens.spacingHorizontalS, 0)
    },
    fluent: {
        display: "flex",
        width: "48px",
        height: "48px",
        justifyContent: "center",
        alignItems: "center",
        ":hover": {
            backgroundColor: tokens.colorNeutralBackground3Hover,
            "& > svg": {
                color: tokens.colorNeutralForeground2BrandHover
            }
        },
        ":active": {
            backgroundColor: tokens.colorNeutralBackground3Pressed
        }
    },
});
