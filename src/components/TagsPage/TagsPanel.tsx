import SiteConfig from "#/SiteConfig.ts";
import { articlesTagMap } from "#lib/articleCollection.ts";
import {
    Card,
    CounterBadge,
    Divider,
    InteractionTag,
    InteractionTagPrimary,
    makeStyles,
    shorthands,
    Subtitle1,
    TagGroup,
    tokens
} from "@fluentui/react-components";
import type { ReactNode } from "react";

const { navBar } = SiteConfig;
const page = navBar.url.tags;

export default function TagsPanel() {
    const styles = useStyles();
    const items = new Array<ReactNode>();

    const handleClick = (tag: string) => {
        window.location.href = `${ page }/${ tag }`;
    };

    for (const [tag, count] of articlesTagMap) {
        items.push(
            <InteractionTag key={ `${ page }/${ tag }` } appearance={ "brand" }>
                <InteractionTagPrimary onClick={ () => handleClick(tag) }>
                    { tag }
                    <CounterBadge className={ styles.badge }
                                  count={ count }
                                  color={ "brand" }
                                  size={ "small" }
                    />
                </InteractionTagPrimary>
            </InteractionTag>
        );
    }

    return (
        <Card className={ styles.card }
              size={ "large" }
        >
            <Subtitle1>{ navBar.tags }</Subtitle1>
            <Divider />
            <TagGroup className={ styles.tagGroup }
                      size={ "medium" }
            >
                {
                    items.map((v) => v)
                }
            </TagGroup>
        </Card>
    );
}

const useStyles = makeStyles({
    card: {
        top: 0,
        backgroundColor: tokens.colorNeutralBackground1,
        ...shorthands.transition("all", "0.1s", "0s", "ease-out"),
        ":hover": {
            top: "-2px",
            boxShadow: tokens.shadow16
        }
    },
    tagGroup: {
        flexWrap: "wrap",
        ...shorthands.gap(tokens.spacingVerticalM)
    },
    badge: {
        marginLeft: tokens.spacingHorizontalM
    }
});
