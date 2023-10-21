import OmissionButton from "#components/Pagination/OmissionButton.tsx";
import PageButton from "#components/Pagination/PageButton.tsx";
import { makeStyles, shorthands, tokens } from "@fluentui/react-components";
import { ChevronLeft24Filled, ChevronRight24Filled } from "@fluentui/react-icons";
import type { Page } from "astro";
import type { CollectionEntry } from "astro:content";

export default function Pagination({ page, pathname }: Props) {
    const styles = useStyles();
    const array = [...Array(page.lastPage).keys()].map(v => v + 1);

    let items: Array<number>;
    let omissionsLeft: Array<number>;
    let omissionsRight: Array<number>;

    if (page.lastPage > 10) {
        const current = page.currentPage;
        const last = page.lastPage;

        /*
        * three states of pagination
        * first: <  1  2  3  4  5  ...  12  >
        * second: <  1  ...  8  9  10  11  12  >
        * third: <  1  ...  5  6  7  8  ...  12  >
        * */
        if (current <= 4) items = [1, 2, 3, 4, 5, 0, last];
        else if (last - current <= 3) items = [1, 0, last - 4, last - 3, last - 2, last - 1, last];
        else items = [1, 0, current - 1, current, current + 1, current + 2, 0, last];

        omissionsLeft = array.filter(v => !items.includes(v) && v < current);
        omissionsRight = array.filter(v => !items.includes(v) && v > current);
    } else {
        items = [...Array(page.lastPage).keys()].map(v => v + 1);
    }

    return (
        <div className={ styles.container }>
            <PageButton icon={ <ChevronLeft24Filled /> }
                        url={
                            page.url.prev
                            ? `${ import.meta.env.BASE_URL }${ page.url.prev! }`
                            : undefined
                        }
                        current={ false }
            />
            <div className={ styles.container }>
                {
                    items.map((v, i) => {
                        // the first ellipsis that appears
                        if (v == 0 && i == 1) {
                            if (omissionsLeft.length == 1) {
                                return (
                                    <PageButton key={ `${ v }-${ i }` }
                                                children={ omissionsLeft[0].toString() }
                                                url={ `${ pathname }/${ omissionsLeft[0] }` }

                                    />
                                );
                            }

                            return (
                                <OmissionButton key={ `${ v }-${ i }` }
                                                omissionsLeft={ omissionsLeft }
                                                pathname={ pathname }
                                />
                            );
                            // the second ellipsis that appears
                        } else if (v == 0) {
                            if (omissionsRight.length == 1) {
                                return (
                                    <PageButton key={ `${ v }-${ i }` }
                                                children={ omissionsRight[0].toString() }
                                                url={ `${ pathname }/${ omissionsRight[0] }` }
                                    />
                                );
                            }

                            return (
                                <OmissionButton key={ `${ v }-${ i }` }
                                                omissionsRight={ omissionsRight }
                                                pathname={ pathname }
                                />
                            );

                        } else {
                            const url = v == 1 ? `${ pathname }/` : `${ pathname }/${ v }`;
                            const current = page.currentPage == v;
                            return (
                                <PageButton key={ `${ v }-${ i }` }
                                            children={ v.toString() }
                                            url={ url }
                                            current={ current }
                                />
                            );
                        }
                    })
                }
            </div>
            <PageButton icon={ <ChevronRight24Filled /> }
                        url={
                            page.url.next
                            ? `${ import.meta.env.BASE_URL }${ page.url.next! }`
                            : undefined
                        }
                        current={ false }
            />
        </div>
    );
}

interface Props {
    page: Page<CollectionEntry<"articles">>;
    pathname: string;
}

const useStyles = makeStyles({
    container: {
        display: "flex",
        justifyContent: "center",
        ...shorthands.gap(tokens.spacingHorizontalS, 0)
    },
});
