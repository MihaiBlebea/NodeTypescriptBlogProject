import * as repo from 'mysql-ts-repo-design'
import { Article } from './../../domain/Article/Article'
import { ArticleRepo } from './../../domain/Article/ArticleRepo'



export class MysqlArticleRepo extends repo.Repo implements ArticleRepo
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

    tableName = 'articles'

    constructor(conn : repo.MysqlInterface)
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

    withSlug(slug : String) : [ Article ]
    {
        return this.conn.query(
            `SELECT *
             FROM ${ this.tableName }
             WHERE slug = ?`, [ slug ]).then((rows : any)=> {
                return this.constructModels(rows)
             })
    }
}
