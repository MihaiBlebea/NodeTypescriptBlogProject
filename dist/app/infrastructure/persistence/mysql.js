"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const repo = __importStar(require("mysql-ts-repo-design"));
exports.connection = repo.mysql.connect(process.env.LOCAL_MYSQL_HOST, process.env.LOCAL_MYSQL_USER, process.env.LOCAL_MYSQL_DATABASE, process.env.LOCAL_MYSQL_PASSWORD);
