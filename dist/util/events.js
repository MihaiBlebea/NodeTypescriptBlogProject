"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const event_manager_js_1 = require("event-manager-js");
const SendEmail_1 = require("./../app/infrastructure/email/SendEmail");
let store = new event_manager_js_1.EventStore();
store.on('ArticlePublished', new SendEmail_1.SendEmail());
exports.default = store;
