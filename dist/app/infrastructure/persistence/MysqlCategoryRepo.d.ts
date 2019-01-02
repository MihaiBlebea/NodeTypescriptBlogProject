import * as repo from 'mysql-ts-repo-design';
import { Category } from './../../domain/Category/Category';
import { CategoryRepo } from './../../domain/Category/CategoryRepo';
export declare class MysqlCategoryRepo extends repo.Repo implements CategoryRepo {
    attributes: string[];
    tableName: string;
    constructor(conn: repo.MysqlInterface);
    constructModel(row: any): Category;
    deconstructModel(model: Category): {
        id: string;
        title: string;
        slug: string;
        updated: Date;
        created: Date;
    };
}
