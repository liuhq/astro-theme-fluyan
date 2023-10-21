import SiteConfig from "#/SiteConfig.ts";
import { Link, makeStyles, Subtitle1 } from "@fluentui/react-components";

const page = SiteConfig.navBar.url.article;

export default function CardTitle({ content, year, slug }: Props) {
    const styles = useStyles();
    const url = `${ page }/${ year }/${ slug }`;

    return (
        <Link href={ url } appearance={ "subtle" }>
            <Subtitle1 className={ styles.title }
                       as={ "h2" }
                       block
                       children={ content }
            />
        </Link>
    );
}

interface Props {
    content: string;
    year: string;
    slug: string;
}

const useStyles = makeStyles({
    title: {
        marginTop: "0"
    }
});
