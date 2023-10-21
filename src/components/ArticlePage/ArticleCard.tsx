import SiteConfig from "#/SiteConfig.ts";
import Info from "#components/PostCard/Info.tsx";
import locale from "#lib/locale.ts";
import { Card, Divider, LargeTitle, makeStyles, shorthands, tokens } from "@fluentui/react-components";
import type { CollectionEntry } from "astro:content";
import type { ReactNode } from "react";

const { other } = SiteConfig;

export default function ArticleCard({ children, article }: Props) {
    const styles = useStyles();

    const { data } = article;
    const publish = locale(data.publishDate).format("YYYY/MM/DD");
    const update = data.updateDate ? locale(data.updateDate).format("YYYY/MM/DD") : undefined;

    return (
        <Card className={ styles.card } size={ "large" }>
            <LargeTitle className={ styles.title } block>{ data.title }</LargeTitle>
            <Info category={ data.category || other } publish={ publish } update={ update } />
            <Divider />
            <div className={ styles.body }>
                { children }
            </div>
        </Card>
    );
}

interface Props {
    children: ReactNode;
    article: CollectionEntry<"articles">;
}

const useStyles = makeStyles({
    card: {
        top: 0,
        minWidth: "560px",
        ...shorthands.transition("all", "0.1s", "0s", "ease-out"),
        ...shorthands.padding(tokens.spacingHorizontalXXXL),
        ":hover": {
            top: "-2px",
            boxShadow: tokens.shadow16
        }
    },
    body: {
        ...shorthands.padding(tokens.spacingVerticalL, tokens.spacingHorizontalXXXL, 0)
    },
    title: {
        paddingBottom: tokens.spacingVerticalL
    }
});
