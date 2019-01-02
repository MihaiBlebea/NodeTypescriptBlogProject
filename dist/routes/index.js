"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const articles_1 = __importDefault(require("./articles"));
const categories_1 = __importDefault(require("./categories"));
var router;
(function (router) {
    router.articles = () => articles_1.default;
    router.categories = () => categories_1.default;
})(router = exports.router || (exports.router = {}));
