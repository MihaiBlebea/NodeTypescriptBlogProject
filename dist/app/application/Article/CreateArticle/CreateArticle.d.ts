import { ArticleRepo } from './../../../domain/Article/ArticleRepo';
import { CreateArticleRequest } from './CreateArticleRequest';
import { AppService } from './../../AppService';
export declare class CreateArticle implements AppService {
    private repo;
    constructor(repo: ArticleRepo);
    execute(request: CreateArticleRequest): void;
}
