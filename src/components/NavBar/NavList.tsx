import SiteConfig from "#/SiteConfig.ts";
import NavItem from "#components/NavBar/NavItem.tsx";
import { articlesCategoryMap } from "#lib/articleCollection.ts";
import { makeStyles } from "@fluentui/react-components";

const { navBar } = SiteConfig;
const { url } = navBar;
const defaultCategory = articlesCategoryMap.keys().next().value;

export default function NavList() {
    const styles = useStyles();


    return (
        <div className={ styles.container }>
            <NavItem content={ navBar.home } url={ url.home } />
            <NavItem content={ navBar.categories } url={ `${ url.categories }/${ defaultCategory }` } />
            <NavItem content={ navBar.tags } url={ url.tags } />
        </div>
    );
}

const useStyles = makeStyles({
    container: {
        display: "flex",
        justifyContent: "space-between",
        justifyItems: "center",
        alignItems: "center",
    }
});
