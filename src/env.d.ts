/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface UserConfig {
    lang: string;
    siteTitle: string;
    author: string;
    avatar: string;
    bio: string;
    email: string;
    socialLink?: {
        github?: string
        twitter?: string
        discord?: string
        reddit?: string
        weibo?: string
        bilibili?: string
    } | undefined;
    siteStartDate: string;
}

interface SiteConfig {
    navBar: NavBar;
    homePage: HomePage;
    articlePage: ArticlePage;
    tagPage: TagPage;
    post: Post;
    other: string;
    pageSize: number;
}

interface NavBar {
    home: string;
    categories: string;
    tags: string;
    dark: string;
    url: {
        home: string
        categories: string
        tags: string
        article: string
    };
}

interface HomePage {
    runningFor: string;
    days: string;
    startedOn: string;
    realDateFormat: string;
    dateTree: {
        all: string
        year: string
        month: string
    };
}

interface ArticlePage {
    back: string;
}

interface TagPage {
    tagTitle: string;
}

interface Post {
    publishTooltip: string;
    updateTooltip: string;
    categoryTooltip: string;
}
