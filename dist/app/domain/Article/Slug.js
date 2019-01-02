"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Slug {
    constructor(slug) {
        this.slug = slug;
    }
    static generate(title) {
        console.log('THIS IS THE TITLE', title);
        let slug = title.split(' ').join('-').toLowerCase();
        return new this(slug);
    }
    value() {
        return this.slug;
    }
}
exports.Slug = Slug;
