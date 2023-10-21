import SiteConfig from "#/SiteConfig.ts";
import { Button, makeStyles, tokens } from "@fluentui/react-components";
import { ChevronLeft24Filled } from "@fluentui/react-icons";


const { articlePage } = SiteConfig;

export default function PageTool() {
    const styles = useStyles();

    function handleClick() {
        window.history.back();
    }

    return (
        <div>
            <Button className={ styles.button }
                    appearance={ "subtle" }
                    icon={ <ChevronLeft24Filled /> }
                    onClick={ handleClick }
            >
                { articlePage.back }
            </Button>
        </div>
    );
}

const useStyles = makeStyles({
    button: {
        ":hover": {
            backgroundColor: tokens.colorNeutralBackground3Hover
        },
        ":active": {
            backgroundColor: tokens.colorNeutralBackground3Pressed
        }
    }
});
