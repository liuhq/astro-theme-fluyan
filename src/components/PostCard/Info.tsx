import SiteConfig from "#/SiteConfig.ts";
import {
    Body1,
    Caption1,
    Link,
    makeStyles,
    mergeClasses,
    shorthands,
    tokens,
    Tooltip
} from "@fluentui/react-components";
import { Bookmark16Filled, Calendar16Filled, CalendarEdit16Filled } from "@fluentui/react-icons";

const { post, other, navBar } = SiteConfig;
const page = navBar.url.categories;

export default function Info({ category, publish, update }: Props) {
    const styles = useStyles();
    const infoItem = mergeClasses(styles.info, styles.infoItem);

    return (
        <div className={ styles.info }>
            <Tooltip content={ <Caption1>{ post.categoryTooltip }</Caption1> }
                     mountNode={ document.querySelector("#popover-layout") }
                     relationship={ "description" }
            >
                <div className={ infoItem }>
                    <Bookmark16Filled />
                    <Link href={ `${ page }/${ category }` } appearance={ "subtle" }>
                        <Body1 children={ category || other } />
                    </Link>
                </div>
            </Tooltip>
            <Tooltip content={ <Caption1>{ post.publishTooltip }</Caption1> }
                     mountNode={ document.querySelector("#popover-layout") }
                     relationship={ "description" }
            >
                <div className={ infoItem }>
                    <Calendar16Filled />
                    <Body1 children={ publish } />
                </div>
            </Tooltip>
            {
                update &&

                <Tooltip content={ <Caption1>{ post.updateTooltip }</Caption1> }
                         mountNode={ document.querySelector("#popover-layout") }
                         relationship={ "description" }
                >
                    <div className={ infoItem }>
                        <CalendarEdit16Filled />
                        <Body1 children={ update } />
                    </div>
                </Tooltip>
            }
        </div>
    );
}

interface Props {
    category: string | undefined;
    publish: string;
    update: string | undefined;
}

const useStyles = makeStyles({
    info: {
        display: "flex",
        alignItems: "center",
        ...shorthands.gap(tokens.spacingHorizontalL)
    },
    infoItem: {
        ...shorthands.gap(tokens.spacingHorizontalXS)
    }
});
