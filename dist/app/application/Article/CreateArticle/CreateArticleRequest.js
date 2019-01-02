"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateArticleRequest {
    constructor(category, title, body, image, author) {
        this.category = category;
        this.title = title;
        this.body = body;
        this.image = image;
        this.author = author;
    }
}
exports.CreateArticleRequest = CreateArticleRequest;
