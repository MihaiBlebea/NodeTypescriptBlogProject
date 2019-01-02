"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Category_1 = require("./../../../domain/Category");
class CreateCategory {
    constructor(repo) {
        this.repo = repo;
    }
    execute(request) {
        this.repo.add(new Category_1.Category(request.title, request.slug));
        return this.repo.flush();
    }
}
exports.CreateCategory = CreateCategory;
