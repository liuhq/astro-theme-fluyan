import SiteConfig from "#/SiteConfig.ts";
import locale from "#lib/locale.ts";
import { type CollectionEntry, getCollection } from "astro:content";

const { other } = SiteConfig;

const getUpdateOrder = async (globalArticles: Array<CollectionEntry<"articles">>) => {
    const articles = [...globalArticles];

    articles.sort((a: CollectionEntry<"articles">, b: CollectionEntry<"articles">) => {
        const first = locale(a.data.updateDate || a.data.publishDate);
        const second = locale(b.data.updateDate || b.data.publishDate);
        return first.isBefore(second) ? 1 : -1;
    });

    return articles;
};


const getPublishOrder = async (globalArticles: Array<CollectionEntry<"articles">>) => {
    const articles = [...globalArticles];

    articles.sort((a: CollectionEntry<"articles">, b: CollectionEntry<"articles">) => {
        const first = locale(a.data.publishDate);
        const second = locale(b.data.publishDate);
        return first.isBefore(second) ? 1 : -1;
    });

    return articles;
};


const getDateList = async (articles: Array<CollectionEntry<"articles">>) => {
    const yearCount = new Map<number, number>();
    const map = new Map<number, Months>();

    for (const article of articles) {
        const year = locale(article.data.publishDate).year();
        //dayjs month starts at 0
        const month = locale(article.data.publishDate).month() + 1;

        if (map.has(year)) {
            const y = map.get(year)!;
            y.set(month, (y.get(month) || 0) + 1);
        } else {
            map.set(year, new Map<number, number>([[month, 1]]));
        }

        yearCount.set(year, (yearCount.get(year) || 0) + 1);
    }

    return { map, yearCount };
};

const getCategoryList = async (articles: Array<CollectionEntry<"articles">>) => {
    const preMap = new Map<string, number>();

    for (const article of articles) {
        const category = article.data.category || SiteConfig.other;
        const count = preMap.get(category) || 0;
        preMap.set(category, count + 1);
    }

    const array = Array.from(preMap);
    array.sort((a, b) => {
        if (a[0] == other) return 1;
        if (b[0] == other) return -1;
        return a[0].localeCompare(b[0]);
    });

    return new Map<string, number>(array);
};

const getTagList = async (articles: Array<CollectionEntry<"articles">>) => {
    const map = new Map<string, number>();

    for (const article of articles) {
        const tags = article.data.tags;
        if (!tags) continue;
        for (const tag of tags) {
            const count = map.get(tag) || 0;
            map.set(tag, count + 1);
        }
    }

    return map;
};

export function filterByDate(year: number, month: number, articles: Array<CollectionEntry<"articles">>) {
    return articles.filter((v) => {
        const date = locale(v.data.publishDate);
        return date.year() == year && date.month() + 1 == month;
    });
}

export function filterByCategory(category: string, articles: Array<CollectionEntry<"articles">>) {
    return articles.filter((v) => {
        return (v.data.category || other) == category;
    });
}

export function filterByTag(tag: string, articles: Array<CollectionEntry<"articles">>) {
    return articles.filter((v) => {
        return v.data.tags?.includes(tag);
    });
}

export const globalArticles = await getCollection("articles");

export const updateDateOrder = await getUpdateOrder(globalArticles);

export const publishDateOrder = await getPublishOrder(globalArticles);

export const { map: articlesDateMap, yearCount } = await getDateList(publishDateOrder);

export const articlesCategoryMap = await getCategoryList(globalArticles);

export const articlesTagMap = await getTagList(globalArticles);

export type Months = Map<number, number>;
