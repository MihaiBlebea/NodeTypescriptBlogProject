import { Repo, MysqlInterface } from 'mysql-ts-repo-design';
import { Article } from './../../domain/Article/Article';
export declare class MysqlEventRepo extends Repo {
    attributes: string[];
    tableName: string;
    constructor(conn: MysqlInterface);
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
}
