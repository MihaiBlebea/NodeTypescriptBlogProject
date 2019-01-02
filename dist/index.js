"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: __dirname + '/../.env' });
const routes_1 = require("./routes");
const util_1 = require("./util");
const app = express_1.default();
app.use('/public', express_1.default.static(path_1.default.join(__dirname, './../public')));
app.use(cors_1.default());
app.use(body_parser_1.default.json());
app.get('/', (request, response) => {
    let repo = util_1.Container.get('MysqlArticleRepo');
    console.log(repo);
    response.send(`It works! ${process.env.LOCAL_MYSQL_HOST}`);
});
app.use('/article', routes_1.router.articles());
app.use('/category', routes_1.router.categories());
app.listen(3000, () => {
    console.log('App works on port 3000');
});
