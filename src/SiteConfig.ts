const SiteConfig: SiteConfig = {
    navBar: {
        home: "首页",
        categories: "分类",
        tags: "标签",
        dark: "暗黑模式",
        url: {
            home: import.meta.env.BASE_URL,
            categories: `${ import.meta.env.BASE_URL }/categories`,
            tags: `${ import.meta.env.BASE_URL }/tags`,
            article: `${ import.meta.env.BASE_URL }/article`
        }
    },
    homePage: {
        runningFor: "已运行",
        days: "天",
        startedOn: "启动于 YYYY年MM月DD日",
        realDateFormat: "YYYY年MM月DD日，dddd",
        dateTree: {
            all: "全部",
            year: "年",
            month: "月"
        }
    },
    articlePage: {
        back: "返回"
    },
    tagPage: {
        tagTitle: "标签："
    },
    post: {
        publishTooltip: "发布日期",
        updateTooltip: "更新日期",
        categoryTooltip: "文章类别"
    },
    other: "其它",
    pageSize: 7
};

export default SiteConfig;
