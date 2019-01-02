import * as repo from 'mysql-ts-repo-design'
import { Category } from './../../domain/Category/Category'
import { CategoryRepo } from './../../domain/Category/CategoryRepo'



export class MysqlCategoryRepo extends repo.Repo implements CategoryRepo
{
    attributes = ['id', 'title', 'slug', 'updated', 'created']

    tableName = 'categories'

    constructor(conn : repo.MysqlInterface)
    {
        super(conn)
    }

    constructModel(row : any)
    {
        return new Category(
            row.title,
            row.slug,
            row.id,
            row.updated,
            row.created
        )
    }

    deconstructModel(model : Category)
    {
        return {
            id:      model.getId(),
            title:   model.getTitle(),
            slug:    model.getSlug(),
            updated: model.getUpdated(),
            created: model.getCreated()
        }
    }
}
