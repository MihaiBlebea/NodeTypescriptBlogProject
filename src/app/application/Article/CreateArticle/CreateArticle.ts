import { Article } from './../../../domain/Article/Article'
import { ArticleRepo } from './../../../domain/Article/ArticleRepo'
import { CreateArticleRequest } from './CreateArticleRequest'
import { AppService } from './../../AppService'


export class CreateArticle implements AppService
{
    private repo : ArticleRepo

    constructor(repo : ArticleRepo)
    {
        this.repo = repo
    }

    execute(request : CreateArticleRequest)
    {
        return this.repo.add(new Article(
            request.category,
            request.title,
            request.body,
            request.image,
            request.author
        ))
    }
}
