"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const liquidts_1 = __importDefault(require("liquidts"));
const fs_1 = __importDefault(require("fs"));
const engine = liquidts_1.default();
exports.renderTemplate = (filePath, params) => __awaiter(this, void 0, void 0, function* () {
    const template = fs_1.default.readFileSync(filePath);
    const tpl = engine.parse(template.toString());
    return yield engine.render(tpl, params).then((output) => {
        return output.read();
    });
});
