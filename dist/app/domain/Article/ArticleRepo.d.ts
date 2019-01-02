import { Article } from './Article';
export interface ArticleRepo {
    add(article: Article): void;
    addAll(articles: Article[]): void;
    remove(article: Article): Boolean;
    removeAll(articles: Article[]): Boolean;
    all(limit: Number, offset: Number): [Article];
    withId(id: String): [Article];
    withSlug(slug: String): [Article];
    flush(): void;
}
