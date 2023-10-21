import { Caption1, Link, makeStyles, shorthands } from "@fluentui/react-components";

export default function Footer() {
    const styles = useStyles();

    return (
        <footer className={ styles.container }>
            <Caption1>
                &nbsp;@&nbsp;
                <Link
                    appearance={ "subtle" }
                    inline
                    target={ "_blank" }
                >
                    Fluyan Theme
                </Link>
                &nbsp;.&nbsp;
                Based on&nbsp;&nbsp;
                <Link href={ "https://astro.build/" }
                      appearance={ "subtle" }
                      inline
                      target={ "_blank" }
                >
                    Astro
                </Link>
                &nbsp;&&nbsp;
                <Link href={ "https://react.dev/" }
                      appearance={ "subtle" }
                      inline
                      target={ "_blank" }
                >
                    React
                </Link>
                &nbsp;+&nbsp;
                <Link href={ "https://fluent2.microsoft.design/" }
                      appearance={ "subtle" }
                      inline
                      target={ "_blank" }
                >
                    Fluent 2
                </Link>
            </Caption1>
        </footer>
    );
}

const useStyles = makeStyles({
    container: {
        textAlign: "center",
        ...shorthands.margin("2rem", "auto")
    }
});
