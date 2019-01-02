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
const Category_1 = require("./../../domain/Category/Category");
class MysqlCategoryRepo extends repo.Repo {
    constructor(conn) {
        super(conn);
        this.attributes = ['id', 'title', 'slug', 'updated', 'created'];
        this.tableName = 'categories';
    }
    constructModel(row) {
        return new Category_1.Category(row.title, row.slug, row.id, row.updated, row.created);
    }
    deconstructModel(model) {
        return {
            id: model.getId(),
            title: model.getTitle(),
            slug: model.getSlug(),
            updated: model.getUpdated(),
            created: model.getCreated()
        };
    }
}
exports.MysqlCategoryRepo = MysqlCategoryRepo;
