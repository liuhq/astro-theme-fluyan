import SiteConfig from "#/SiteConfig.ts";
import {
    articlesCategoryMap,
    articlesDateMap,
    articlesTagMap,
    filterByCategory,
    filterByDate,
    filterByTag,
    globalArticles,
    publishDateOrder
} from "#lib/articleCollection.ts";
import locale from "#lib/locale.ts";
import type { PaginateFunction } from "astro";
import type { CollectionEntry } from "astro:content";

const { pageSize } = SiteConfig;

export const getDateParams = (paginate: PaginateFunction) => {
    const dateParams = [];

    for (const [year, months] of articlesDateMap) {
        for (const [month, _] of months) {
            const articles = filterByDate(year, month, publishDateOrder);
            const group = paginate(articles, {
                params: {
                    year: year.toString(),
                    month: month.toString()
                },
                pageSize
            });
            dateParams.push(...group);
        }
    }

    return dateParams;
};

interface ArticleParam {
    params: {
        year: number
        slug: string
    };
    props: {
        article: CollectionEntry<"articles">
    };
}

export const getArticleParams = () => {
    const articleParams = new Array<ArticleParam>();

    globalArticles.map((article) => {
        const year = locale(article.data.publishDate).year();
        const slug = article.slug;
        articleParams.push({ params: { year, slug }, props: { article } });
    });

    return articleParams;
};

export const getCategoryParams = (paginate: PaginateFunction) => {
    const categoryParams = [];

    for (const [category] of articlesCategoryMap) {
        const articles = filterByCategory(category, publishDateOrder);
        const group = paginate(articles, {
            params: { category },
            pageSize
        });
        categoryParams.push(...group);
    }

    return categoryParams;
};

export const getTagParams = (paginate: PaginateFunction) => {
    const tagParams = [];

    for (const [tag] of articlesTagMap) {
        const articles = filterByTag(tag, publishDateOrder);
        const group = paginate(articles, {
            params: { tag },
            pageSize
        });
        tagParams.push(...group);
    }

    return tagParams;
};

export const getPathname = (base: string, pathname: string) => {
    const tmp = decodeURI(pathname).split("/").filter(v => v);
    if (base != "/") tmp.shift();
    if (tmp.length > 0) return tmp.join("/");
    else return "/";
};
