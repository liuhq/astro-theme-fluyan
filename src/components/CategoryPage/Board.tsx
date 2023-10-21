import SiteConfig from "#/SiteConfig.ts";
import CategoryItems from "#components/CategoryPage/Board/CategoryItems.tsx";
import { Card, Divider, makeStyles, shorthands, Subtitle1, tokens, Tree } from "@fluentui/react-components";

const { navBar } = SiteConfig;

export default function Board() {
    const styles = useStyles();

    return (
        <Card className={ styles.container } size={ "large" }>
            <Subtitle1 className={ styles.title } block>{ navBar.categories }</Subtitle1>
            <Divider inset />
            <Tree>
                <CategoryItems />
            </Tree>
        </Card>
    );
}

const useStyles = makeStyles({
    container: {
        top: 0,
        width: "250px",
        maxHeight: "calc(100vh - 18rem)",
        overflowY: "auto",
        ...shorthands.flex("none"),
        ...shorthands.transition("all", "0.1s", "0s", "ease-out"),
        ":hover": {
            top: "-2px",
            boxShadow: tokens.shadow16
        },
        "::-webkit-scrollbar": {
            width: tokens.spacingHorizontalSNudge,
            backgroundColor: tokens.colorTransparentBackground
        },
        "::-webkit-scrollbar-thumb": {
            backgroundColor: tokens.colorNeutralBackground3,
            ...shorthands.borderRadius(tokens.borderRadiusCircular),
            ":hover": {
                backgroundColor: tokens.colorNeutralBackground3Hover
            }
        }
    },
    title: {
        paddingLeft: tokens.spacingHorizontalM
    }
});
