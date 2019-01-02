"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dependencies_1 = __importDefault(require("./dependencies"));
exports.Container = dependencies_1.default;
const events_1 = __importDefault(require("./events"));
exports.store = events_1.default;
const render_1 = require("./render");
exports.renderTemplate = render_1.renderTemplate;
