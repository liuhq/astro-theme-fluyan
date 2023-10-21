import { Button, makeStyles, shorthands, tokens } from "@fluentui/react-components";
import { AddSquare16Filled, Mail16Filled } from "@fluentui/react-icons";

export default function SocialLink({ email }: Props) {
    const styles = useStyles();

    return (
        <div className={ styles.container }>
            {/*<div>*/ }
            <Button className={ styles.button }
                    appearance={ "subtle" }
                    size={ "small" }
                    icon={ <Mail16Filled /> }
            >
                { email }
            </Button>
            {/*</div>*/ }

            {/* TODO: [feature] iterate social list to create icon button */ }
            <div className={ styles.container }>
                <Button className={ styles.button }
                        appearance={ "subtle" }
                        size={ "small" }
                        icon={ <AddSquare16Filled /> }
                />
                <Button className={ styles.button }
                        appearance={ "subtle" }
                        size={ "small" }
                        icon={ <AddSquare16Filled /> }
                />
                <Button className={ styles.button }
                        appearance={ "subtle" }
                        size={ "small" }
                        icon={ <AddSquare16Filled /> }
                />
                <Button className={ styles.button }
                        appearance={ "subtle" }
                        size={ "small" }
                        icon={ <AddSquare16Filled /> }
                />
            </div>
        </div>
    );
}

interface Props {
    email: string,
    social?: UserConfig["socialLink"]
}

const useStyles = makeStyles({
    container: {
        display: "flex",
        justifyContent: "flex-start",
        ...shorthands.gap(tokens.spacingHorizontalXS, 0)
    },
    button: {
        ":hover": {
            backgroundColor: tokens.colorNeutralBackground3Hover
        },
        ":active": {
            backgroundColor: tokens.colorNeutralBackground3Pressed
        }
    },

});
