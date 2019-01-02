import { AppRequest } from './../../AppRequest'


export class CreateCategoryRequest implements AppRequest
{
    public title : string

    public slug : string

    constructor(title : string, slug : string)
    {
        this.title = title
        this.slug  = slug
    }
}
