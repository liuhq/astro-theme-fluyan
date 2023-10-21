import SiteConfig from "#/SiteConfig.ts";
import Content from "#components/HomePage/Board/Content.tsx";
import { articlesCategoryMap } from "#lib/articleCollection.ts";
import { getPathname } from "#lib/params.ts";
import { CounterBadge, TreeItem, TreeItemLayout } from "@fluentui/react-components";
import { CaretRight16Filled } from "@fluentui/react-icons";
import type { ReactNode } from "react";

const { navBar } = SiteConfig;
const pathname = getPathname(import.meta.env.BASE_URL, window.location.pathname);
const page = navBar.url.categories;

export default function CategoryItems() {
    const items = new Array<ReactNode>();

    const handleClick = (category: string) => {
        window.location.href = `${ page }/${ category }`;
    };

    for (const [category, count] of articlesCategoryMap) {
        const active = pathname.split("/")[1] == category;

        items.push(
            <TreeItem key={ `${ page }/${ category }` }
                      itemType={ "leaf" }
                      value={ category }
                      onClick={ () => handleClick(category) }
            >
                <TreeItemLayout aside={ <CounterBadge count={ count } color={ "informative" } /> }
                                iconBefore={
                                    active
                                    ? <CaretRight16Filled />
                                    : undefined
                                }
                >
                    <Content active={ active }>{ category }</Content>
                </TreeItemLayout>
            </TreeItem>
        );
    }

    return (
        <>
            {
                items.map((v) => v)
            }
        </>
    );
}
