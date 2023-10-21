import SiteConfig from "#/SiteConfig.ts";
import Content from "#components/HomePage/Board/Content.tsx";
import MonthItem from "#components/HomePage/Board/MonthItem.tsx";
import { type Months, yearCount } from "#lib/articleCollection.ts";
import { CounterBadge, TreeItem, TreeItemLayout, type TreeItemLayoutProps } from "@fluentui/react-components";

const { homePage } = SiteConfig;

export default function YearItem({ year, months, pathname, countShow }: Props) {
    /* @formatter:off */
    const attr: TreeItemLayoutProps = countShow != year.toString()
                                      ? { aside: <CounterBadge count={ yearCount.get(year) } color={ "informative" } /> }
                                      : {};
    /* @formatter:on */
    const active = countShow != year.toString() && pathname.split("/")[0] == year.toString();

    return (
        <TreeItem itemType={ "branch" }
                  value={ `${ year }` }
        >
            <TreeItemLayout { ...attr } >
                <Content active={ active }>
                    { `${ year } ${ homePage.dateTree.year }` }
                </Content>
            </TreeItemLayout>
            <MonthItem year={ year } months={ months } pathname={ pathname } />
        </TreeItem>
    );
}

interface Props {
    year: number,
    months: Months,
    pathname: string,
    countShow: string
}
