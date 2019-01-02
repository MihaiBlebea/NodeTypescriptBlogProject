"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetSlugCategory {
    constructor(repo) {
        this.repo = repo;
    }
    execute(slug) {
        return this.repo.findSlug(slug);
    }
}
exports.GetSlugCategory = GetSlugCategory;
