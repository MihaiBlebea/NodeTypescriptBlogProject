import { Title } from './Title'
import { Slug } from './Slug'
import { Article } from './../Article/Article'


export class Category
{
    private id? : string

    private title! : Title

    private slug! : Slug

    private updated : Date

    private created : Date

    private articles : Article[] = []


    constructor(
        title : string,
        slug? : string,
        id? : string,
        updated? : Date,
        created? : Date)
    {
        this.id = id
        this.setTitle(title)
        this.setSlug(slug)

        this.updated = updated || new Date()
        this.created = created || new Date()

        Object.freeze(this.title)
        Object.freeze(this.slug)
    }

    getId()
    {
        return this.id
    }

    setId(id : string)
    {
        this.id = id
    }

    getTitle()
    {
        return this.title.value()
    }

    setTitle(title : string)
    {
        this.title = new Title(title)
        this.update()
    }

    getSlug()
    {
        return this.slug.value()
    }

    setSlug(slug? : string)
    {
        this.slug = slug ? new Slug(slug) : Slug.generate(this.getTitle())
        this.update()
    }

    update()
    {
        this.updated = new Date()
    }

    getUpdated()
    {
        return this.updated
    }

    getCreated()
    {
        return this.created
    }

    addArticle(article : Article)
    {
        this.articles.push(article)
    }

    addArticles(articles : [Article])
    {
        articles.map((article)=> {
            this.addArticle(article)
        })
    }

    getArticles()
    {
        return this.articles
    }
}
