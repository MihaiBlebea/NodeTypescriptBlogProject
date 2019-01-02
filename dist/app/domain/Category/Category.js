"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Title_1 = require("./Title");
const Slug_1 = require("./Slug");
class Category {
    constructor(title, slug, id, updated, created) {
        this.articles = [];
        this.id = id;
        this.setTitle(title);
        this.setSlug(slug);
        this.updated = updated || new Date();
        this.created = created || new Date();
        Object.freeze(this.title);
        Object.freeze(this.slug);
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getTitle() {
        return this.title.value();
    }
    setTitle(title) {
        this.title = new Title_1.Title(title);
        this.update();
    }
    getSlug() {
        return this.slug.value();
    }
    setSlug(slug) {
        this.slug = slug ? new Slug_1.Slug(slug) : Slug_1.Slug.generate(this.getTitle());
        this.update();
    }
    update() {
        this.updated = new Date();
    }
    getUpdated() {
        return this.updated;
    }
    getCreated() {
        return this.created;
    }
    addArticle(article) {
        this.articles.push(article);
    }
    addArticles(articles) {
        articles.map((article) => {
            this.addArticle(article);
        });
    }
    getArticles() {
        return this.articles;
    }
}
exports.Category = Category;
