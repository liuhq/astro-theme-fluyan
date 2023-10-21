import SiteConfig from "#/SiteConfig.ts";
import { makeStyles, MenuItem, Tag, useIsOverflowItemVisible } from "@fluentui/react-components";

const page = SiteConfig.navBar.url.tags;

export default function OverflowMenuItem({ tag, id }: { tag: string, id: string }) {
    const styles = useStyles();

    const isVisible = useIsOverflowItemVisible(id);

    if (isVisible) return null;

    const handleClick = () => {
        window.location.href = `${ page }/${ tag }`;
    };

    return (
        <MenuItem onClick={ handleClick }>
            <Tag className={ styles.menuItem } primaryText={ tag } />
        </MenuItem>
    );
}

const useStyles = makeStyles({
    menuItem: {
        backgroundColor: "transparent"
    }
});
