"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Title_1 = require("./Title");
const Slug_1 = require("./Slug");
const Body_1 = require("./Body");
const Image_1 = require("./Image");
const Author_1 = require("./Author");
class Article {
    constructor(category, title, body, image, author, slug, id, updated, created) {
        this.id = id;
        this.category = category;
        this.setTitle(title);
        this.setSlug(slug);
        this.setBody(body);
        this.setImage(image);
        this.setAuthor(author);
        this.updated = updated || new Date();
        this.created = created || new Date();
        Object.freeze(this.title);
        Object.freeze(this.slug);
        Object.freeze(this.body);
        Object.freeze(this.image);
        Object.freeze(this.author);
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getCategory() {
        return this.category;
    }
    setCategory(category) {
        this.category = category;
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
        console.log('THIS IS THE SLUG', slug);
        this.slug = (slug !== undefined) ? new Slug_1.Slug(slug) : Slug_1.Slug.generate(this.getTitle());
        this.update();
    }
    getBody() {
        return this.body.value();
    }
    setBody(body) {
        this.body = new Body_1.Body(body);
        this.update();
    }
    getImage() {
        return this.image.value();
    }
    setImage(image) {
        this.image = new Image_1.Image(image);
        this.update();
    }
    getAuthor() {
        return this.author;
    }
    setAuthor(author) {
        this.author = new Author_1.Author(author);
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
}
exports.Article = Article;
