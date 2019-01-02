"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Article_1 = require("./../../../domain/Article/Article");
class CreateArticle {
    constructor(repo) {
        this.repo = repo;
    }
    execute(request) {
        return this.repo.add(new Article_1.Article(request.category, request.title, request.body, request.image, request.author));
    }
}
exports.CreateArticle = CreateArticle;
