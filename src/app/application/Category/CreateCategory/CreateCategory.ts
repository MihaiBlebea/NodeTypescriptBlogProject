import { Category, CategoryRepo } from './../../../domain/Category'
import { AppService } from './../../AppService'
import { CreateCategoryRequest } from './CreateCategoryRequest'


export class CreateCategory implements AppService
{
    private repo : CategoryRepo


    constructor(repo : CategoryRepo)
    {
        this.repo = repo
    }

    execute(request : CreateCategoryRequest)
    {
        this.repo.add(new Category(request.title, request.slug))
        return this.repo.flush()
    }
}
