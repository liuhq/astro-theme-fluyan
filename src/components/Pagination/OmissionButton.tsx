import PageButton from "#components/Pagination/PageButton.tsx";
import {
    Button,
    makeStyles,
    Popover,
    PopoverSurface,
    PopoverTrigger,
    shorthands,
    tokens
} from "@fluentui/react-components";

export default function OmissionButton({ omissionsLeft, omissionsRight, pathname }: Props) {
    const styles = useStyles();
    const omissions = omissionsLeft || omissionsRight;

    return (
        <Popover mountNode={ document.querySelector("#popover-layout") }
                 positioning={ "above" }
                 withArrow
        >
            <PopoverTrigger disableButtonEnhancement>
                <Button className={ styles.buttonNormal }
                        appearance={ "subtle" }
                >
                    . . .
                </Button>
            </PopoverTrigger>
            <PopoverSurface>
                <div className={ styles.container }>
                    {
                        omissions?.map(v => <PageButton url={ `${ pathname }/${ v }` } children={ v.toString() } />)
                    }
                </div>
            </PopoverSurface>
        </Popover>
    );
}

interface Props {
    omissionsLeft?: Array<number>;
    omissionsRight?: Array<number>;
    pathname: string;
}

const useStyles = makeStyles({
    container: {
        display: "flex",
        flexWrap: "wrap",
        maxWidth: "274px",
        ...shorthands.gap(tokens.spacingHorizontalXS)
    },
    buttonNormal: {
        minWidth: "42px",
        ":hover": {
            backgroundColor: tokens.colorNeutralBackground3Hover
        },
        ":active": {
            backgroundColor: tokens.colorNeutralBackground3Pressed
        }
    },
});
