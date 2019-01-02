"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const event_manager_js_1 = require("event-manager-js");
class ArticlePublished extends event_manager_js_1.DomainEvent {
    constructor() {
        super();
    }
    get payload() {
        return {
            occurredOn: this.timestamp
        };
    }
}
exports.ArticlePublished = ArticlePublished;
