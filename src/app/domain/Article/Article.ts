import { Title } from './Title'
import { Slug } from './Slug'
import { Body } from './Body'
import { Image } from './Image'
import { Author } from './Author'


export class Article
{
    private id? : string

    private category : string

    private title! : Title

    private slug! : Slug

    private body! : Body

    private image! : Image

    private author! : Author

    private updated : Date

    private created : Date

    constructor(
        category : string,
        title : string,
        body : string,
        image : string,
        author : string,
        slug? : string,
        id? : string,
        updated? : Date,
        created? : Date)
    {
        this.id       = id
        this.category = category
        this.setTitle(title)
        this.setSlug(slug)
        this.setBody(body)
        this.setImage(image)
        this.setAuthor(author)

        this.updated  = updated || new Date()
        this.created  = created || new Date()

        Object.freeze(this.title)
        Object.freeze(this.slug)
        Object.freeze(this.body)
        Object.freeze(this.image)
        Object.freeze(this.author)
    }

    getId()
    {
        return this.id
    }

    setId(id : string)
    {
        this.id = id
    }

    getCategory()
    {
        return this.category
    }

    setCategory(category : string)
    {
        this.category = category
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

    setSlug(slug? : String)
    {
        console.log('THIS IS THE SLUG', slug)
        this.slug = (slug !== undefined) ? new Slug(slug) : Slug.generate(this.getTitle())
        this.update()
    }

    getBody()
    {
        return this.body.value()
    }

    setBody(body : string)
    {
        this.body = new Body(body)
        this.update()
    }

    getImage()
    {
        return this.image.value()
    }

    setImage(image : string)
    {
        this.image = new Image(image)
        this.update()
    }

    getAuthor()
    {
        return this.author
    }

    setAuthor(author : string)
    {
        this.author = new Author(author)
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
}
