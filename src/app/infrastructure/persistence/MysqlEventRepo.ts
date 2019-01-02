import { Repo, MysqlInterface } from 'mysql-ts-repo-design'
import { Article } from './../../domain/Article/Article'



export class MysqlEventRepo extends Repo
{
    attributes = [
        'id',
        'category_id',
        'title',
        'slug',
        'body',
        'image',
        'author',
        'updated',
        'created'
    ]

    tableName = 'events'

    constructor(conn : MysqlInterface)
    {
        super(conn)
    }

    constructModel(row : any)
    {
        return new Article(
            row.category,
            row.title,
            row.body,
            row.image,
            row.author,
            row.slug,
            row.id,
            row.updated,
            row.created
        )
    }

    deconstructModel(model : Article)
    {
        return {
            id:       model.getId(),
            category: model.getCategory(),
            title:    model.getTitle(),
            slug:     model.getSlug(),
            body:     model.getBody(),
            image:    model.getImage(),
            author:   model.getAuthor(),
            updated:  model.getUpdated(),
            created:  model.getCreated()
        }
    }
}
