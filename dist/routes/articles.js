"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const render_1 = require("./../util/render");
const router = express_1.default.Router();
const folderPath = __dirname + '/../../public';
router.get('/', (request, response) => {
    render_1.renderTemplate(folderPath + '/index.liquid', {
        title: 'Andrei page',
        name: 'Andrei'
    }).then((result) => {
        response.send(result);
    });
});
exports.default = router;
