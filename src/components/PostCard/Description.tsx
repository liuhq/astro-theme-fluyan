import { Body1Strong, makeStyles, shorthands, tokens } from "@fluentui/react-components";
import { CaretRight16Filled } from "@fluentui/react-icons";

export default function Description({ content }: { content: string }) {
    const styles = useStyles();

    return (
        <div className={ styles.container }>
            <CaretRight16Filled className={ styles.icon } />
            <Body1Strong truncate wrap={ false }>{ content }</Body1Strong>
        </div>
    );
}

const useStyles = makeStyles({
    container: {
        display: "flex",
        alignItems: "center",
        marginTop: tokens.spacingVerticalL,
        width: "96%",
        ...shorthands.gap(tokens.spacingHorizontalXS)
    },
    icon: {
        ...shorthands.flex("none")
    }
});
