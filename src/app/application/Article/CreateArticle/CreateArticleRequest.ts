import { AppRequest } from './../../AppRequest'


export class CreateArticleRequest implements AppRequest
{
    public category : string

    public title : string

    public body : string

    public image : string

    public author : string

    constructor(
        category : string,
        title : string,
        body : string,
        image : string,
        author : string)
    {
        this.category = category
        this.title    = title
        this.body     = body
        this.image    = image
        this.author   = author
    }
}
