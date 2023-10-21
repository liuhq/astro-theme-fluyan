import { makeStyles, shorthands, Subtitle2Stronger, tokens } from "@fluentui/react-components";
import { Home24Filled } from "@fluentui/react-icons";

export default function SiteIcon({ siteTitle }: Props) {
    const styles = useStyles();

    return (
        <div className={ styles.container }>
            <Home24Filled className={ styles.icon } />
            <Subtitle2Stronger>{ siteTitle }</Subtitle2Stronger>
        </div>
    );
}

interface Props {
    siteTitle: string;
}

const useStyles = makeStyles({
    container: {
        display: "flex",
        justifyContent: "space-between",
        justifyItems: "center",
        alignItems: "center",
        ...shorthands.gap(tokens.spacingHorizontalS, 0)
    },
    icon: {
        width: "48px"
    }
});
