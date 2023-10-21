import { Button, makeStyles, type Slot, tokens } from "@fluentui/react-components";

export default function PageButton({ children, icon, url, current = false }: Props) {
    const styles = useStyles();
    const handleClick = (url: string | undefined) => {
        if (!url) return;
        window.location.href = url;
    };
    return (
        <Button className={ current ? styles.buttonCurrent : styles.buttonNormal }
                appearance={ current ? "primary" : "subtle" }
                icon={ icon }
                children={ children }
                onClick={ () => handleClick(url) }
        />
    );
}

interface Props {
    children?: string | undefined;
    icon?: Slot<"span"> | undefined;
    url: string | undefined;
    current?: boolean;
}

const useStyles = makeStyles({
    buttonNormal: {
        minWidth: "42px",
        ":hover": {
            backgroundColor: tokens.colorNeutralBackground3Hover
        },
        ":active": {
            backgroundColor: tokens.colorNeutralBackground3Pressed
        }
    },
    buttonCurrent: {
        minWidth: "42px",
    }
});
