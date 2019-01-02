"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typescript_dependency_injection_1 = require("typescript-dependency-injection");
const persistence_1 = require("./../app/infrastructure/persistence");
const persistence_2 = require("./../app/infrastructure/persistence");
let container = new typescript_dependency_injection_1.Container();
container.register(persistence_2.MysqlArticleRepo)
    .dependsOn(persistence_1.connection);
exports.default = container;
