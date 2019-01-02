import * as repo from 'mysql-ts-repo-design';
import { Article } from './../../domain/Article/Article';
import { ArticleRepo } from './../../domain/Article/ArticleRepo';
export declare class MysqlArticleRepo extends repo.Repo implements ArticleRepo {
    attributes: string[];
    tableName: string;
    constructor(conn: repo.MysqlInterface);
    constructModel(row: any): Article;
    deconstructModel(model: Article): {
        id: string;
        category: string;
        title: string;
        slug: String;
        body: string;
        image: string;
        author: import("../../domain/Article/Author").Author;
        updated: Date;
        created: Date;
    };
    withSlug(slug: String): [Article];
}
