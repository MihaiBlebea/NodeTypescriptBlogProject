import { Article } from './../Article/Article';
export declare class Category {
    private id?;
    private title;
    private slug;
    private updated;
    private created;
    private articles;
    constructor(title: string, slug?: string, id?: string, updated?: Date, created?: Date);
    getId(): string;
    setId(id: string): void;
    getTitle(): string;
    setTitle(title: string): void;
    getSlug(): string;
    setSlug(slug?: string): void;
    update(): void;
    getUpdated(): Date;
    getCreated(): Date;
    addArticle(article: Article): void;
    addArticles(articles: [Article]): void;
    getArticles(): Article[];
}
