import { Link, makeStyles, shorthands, tokens } from "@fluentui/react-components";

export default function NavItem({ content, url }: Props) {
    const styles = useStyles();

    return (
        <div>
            <Link className={ styles.link }
                  appearance={ "subtle" }
                  href={ url }
            >{ content }</Link>
        </div>
    );
}

interface Props {
    content: string;
    url: string;
}

const useStyles = makeStyles({
    link: {
        display: "block",
        height: "48px",
        lineHeight: "48px",
        ...shorthands.borderRadius(tokens.borderRadiusMedium),
        ...shorthands.padding(0, tokens.spacingHorizontalL),
        ":hover": {
            backgroundColor: tokens.colorNeutralBackground3Hover,
            ...shorthands.textDecoration("none")
        },
        ":active": {
            backgroundColor: tokens.colorNeutralBackground3Pressed,
            ...shorthands.textDecoration("none")
        }
    }
});
