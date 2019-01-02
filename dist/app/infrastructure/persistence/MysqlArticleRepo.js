"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const repo = __importStar(require("mysql-ts-repo-design"));
const Article_1 = require("./../../domain/Article/Article");
class MysqlArticleRepo extends repo.Repo {
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
        this.tableName = 'articles';
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
    withSlug(slug) {
        return this.conn.query(`SELECT *
             FROM ${this.tableName}
             WHERE slug = ?`, [slug]).then((rows) => {
            return this.constructModels(rows);
        });
    }
}
exports.MysqlArticleRepo = MysqlArticleRepo;
