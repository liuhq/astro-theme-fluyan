import SiteConfig from "#/SiteConfig.ts";
import Content from "#components/HomePage/Board/Content.tsx";
import type { Months } from "#lib/articleCollection.ts";
import {
    CounterBadge,
    makeStyles,
    tokens,
    Tree,
    TreeItem,
    TreeItemLayout,
    treeItemLayoutClassNames
} from "@fluentui/react-components";
import { CaretRight16Filled } from "@fluentui/react-icons";
import type { ReactNode } from "react";

const { homePage } = SiteConfig;

export default function MonthItem({ year, months, pathname }: { year: number, months: Months, pathname: string }) {
    const styles = useMonthItemStyles();

    const items = new Array<ReactNode>();

    const handleClick = (year: number, month: number) => {
        window.location.href = `${ import.meta.env.BASE_URL }/${ year }/${ month }`;
    };

    for (const [month, count] of months) {
        const pathnamePattern = pathname.split("/");
        if (pathnamePattern.length > 2) pathnamePattern.pop();
        const active = pathnamePattern.join("/") == `${ year }/${ month }`;

        items.unshift(
            <TreeItem key={ `${ import.meta.env.BASE_URL }/${ year }/${ month }` }
                      itemType={ "leaf" }
                      onClick={ () => handleClick(year, month) }
            >
                <TreeItemLayout className={ styles.item }
                                aside={ <CounterBadge count={ count } color={ "informative" } /> }
                                iconBefore={
                                    active
                                    ? <CaretRight16Filled />
                                    : undefined
                                }
                >
                    <Content active={ active } className={ styles.number }>
                        { month }
                    </Content>
                    <Content active={ active }>
                        { homePage.dateTree.month }
                    </Content>
                </TreeItemLayout>
            </TreeItem>
        );
    }

    return (
        <Tree>
            {
                items.map((v) => v)
            }
        </Tree>
    );
}

const useMonthItemStyles = makeStyles({
    item: {
        [`& .${ treeItemLayoutClassNames.main }`]: {
            display: "flex",
            justifyContent: "space-between",
            width: "36px"
        },
        ":hover": {
            [`& .${ treeItemLayoutClassNames.iconBefore }`]: {
                color: tokens.colorNeutralForeground2BrandHover
            }
        }
    },
    number: {
        textAlign: "center",
        width: "16px"
    }
});
