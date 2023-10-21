import SiteConfig from "#/SiteConfig.ts";
import Content from "#components/HomePage/Board/Content.tsx";
import YearItem from "#components/HomePage/Board/YearItem.tsx";
import { articlesDateMap, globalArticles } from "#lib/articleCollection.ts";
import { getPathname } from "#lib/params.ts";
import {
    Card,
    CounterBadge,
    makeStyles,
    shorthands,
    tokens,
    Tree,
    TreeItem,
    TreeItemLayout,
    type TreeItemValue,
    type TreeOpenChangeData,
    type TreeOpenChangeEvent
} from "@fluentui/react-components";
import { CaretRight16Filled } from "@fluentui/react-icons/lib/fonts";
import type { ReactNode } from "react";
import { useState } from "react";

const { homePage, navBar } = SiteConfig;
const page = navBar.url.home;
const pathname = getPathname(import.meta.env.BASE_URL, window.location.pathname);

export default function Board() {
    const [countShow, setCountShow] = useState(pathname.split("/")[0] || "");
    const [openItems, setOpenItems] = useState<Iterable<TreeItemValue>>([]);
    const [init, setInit] = useState(true);
    const styles = useStyles();

    if (init) {
        const defaultOpen = pathname.split("/")[0];
        setOpenItems([defaultOpen]);
        setInit(false);
    }

    const items = new Array<ReactNode>();
    const reg = /^\d+$|^\/$/;
    const active = reg.test(pathname);

    const handleClick = () => {
        window.location.href = page;
    };

    const handleOpenChange = (_: TreeOpenChangeEvent, data: TreeOpenChangeData) => {
        const openItemsCopy = openItems as Array<string>;

        if (openItemsCopy[0] == data.value as string) {
            setCountShow("");
            setOpenItems([]);
        } else {
            setCountShow(data.value as string);
            setOpenItems([data.value]);
        }
    };

    for (const [year, months] of articlesDateMap) {
        items.push(
            <YearItem key={ `${ year }` }
                      year={ year }
                      months={ months }
                      pathname={ pathname }
                      countShow={ countShow }
            />
        );
    }

    return (
        <Card className={ styles.container } size={ "large" }>
            <Tree openItems={ openItems }
                  onOpenChange={ handleOpenChange }
            >
                <TreeItem key={ "/all" }
                          itemType={ "leaf" }
                          value={ "all" }
                          onClick={ handleClick }
                >
                    <TreeItemLayout aside={
                        <CounterBadge count={ globalArticles.length } color={ "informative" } />
                    }
                                    iconBefore={
                                        active
                                        ? <CaretRight16Filled />
                                        : undefined
                                    }
                    >
                        <Content active={ active }>{ homePage.dateTree.all }</Content>
                    </TreeItemLayout>
                </TreeItem>
                {
                    items.map((v) => v)
                }
            </Tree>
        </Card>
    );
}

const useStyles = makeStyles({
    container: {
        top: 0,
        width: "250px",
        maxHeight: "calc(100vh - 18rem)",
        overflowY: "auto",
        ...shorthands.flex("none"),
        ...shorthands.transition("all", "0.1s", "0s", "ease-out"),
        ":hover": {
            top: "-2px",
            boxShadow: tokens.shadow16
        },
        "::-webkit-scrollbar": {
            width: tokens.spacingHorizontalSNudge,
            backgroundColor: tokens.colorTransparentBackground
        },
        "::-webkit-scrollbar-thumb": {
            backgroundColor: tokens.colorNeutralBackground3,
            ...shorthands.borderRadius(tokens.borderRadiusCircular),
            ":hover": {
                backgroundColor: tokens.colorNeutralBackground3Hover
            }
        }
    }
});
