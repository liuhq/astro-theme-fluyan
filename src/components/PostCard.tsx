import SiteConfig from "#/SiteConfig.ts";
import CardTitle from "#components/PostCard/CardTitle.tsx";
import Description from "#components/PostCard/Description.tsx";
import Info from "#components/PostCard/Info.tsx";
import Tags from "#components/PostCard/Tags.tsx";
import locale from "#lib/locale.ts";
import { Card, makeStyles, shorthands, tokens } from "@fluentui/react-components";
import type { CollectionEntry } from "astro:content";

const { other } = SiteConfig;

export default function PostCard({ article }: Props) {
    const styles = useStyles();

    const { data, slug } = article;
    const year = locale(data.publishDate).year().toString();
    const publish = locale(data.publishDate).format("YYYY/MM/DD");
    const update = data.updateDate ? locale(data.updateDate).format("YYYY/MM/DD") : undefined;

    return (
        <Card className={ styles.card }
              orientation={ "horizontal" }
              size={ "large" }
        >
            <div className={ styles.body }>
                <CardTitle content={ data.title } year={ year } slug={ slug } />
                <Info category={ data.category || other } publish={ publish } update={ update } />
                { data.tags && <Tags tags={ data.tags } /> }
                { data.description && <Description content={ data.description } /> }
            </div>
        </Card>
    );
}

interface Props {
    article: CollectionEntry<"articles">;
}

const useStyles = makeStyles({
    card: {
        top: 0,
        minWidth: "560px",
        ...shorthands.transition("all", "0.1s", "0s", "ease-out"),
        ":hover": {
            top: "-2px",
            boxShadow: tokens.shadow16
        }
    },
    body: {
        paddingBottom: tokens.spacingVerticalXXS,
        ...shorthands.overflow("hidden")
    }
});
