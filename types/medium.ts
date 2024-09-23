export interface IMediumFeed {
    items: IMediumArticle[];
    feed: string;
    status: string;
}

export interface IMediumArticle {
    title: string;
    pubDate: string;
    content: string;
    description: string;
    guid: string;
    link: string;
    thumbnail: string;
    author: string;
}