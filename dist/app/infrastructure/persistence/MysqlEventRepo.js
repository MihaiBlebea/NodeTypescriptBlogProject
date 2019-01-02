"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_ts_repo_design_1 = require("mysql-ts-repo-design");
const Article_1 = require("./../../domain/Article/Article");
class MysqlEventRepo extends mysql_ts_repo_design_1.Repo {
    constructor(conn) {
        super(conn);
        this.attributes = [
            'id',
            'category_id',
            'title',
            'slug',
            'body',
            'image',
            'author',
            'updated',
            'created'
        ];
        this.tableName = 'events';
    }
    constructModel(row) {
        return new Article_1.Article(row.category, row.title, row.body, row.image, row.author, row.slug, row.id, row.updated, row.created);
    }
    deconstructModel(model) {
        return {
            id: model.getId(),
            category: model.getCategory(),
            title: model.getTitle(),
            slug: model.getSlug(),
            body: model.getBody(),
            image: model.getImage(),
            author: model.getAuthor(),
            updated: model.getUpdated(),
            created: model.getCreated()
        };
    }
}
exports.MysqlEventRepo = MysqlEventRepo;
