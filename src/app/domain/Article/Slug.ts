
export class Slug
{
    private slug : String

    constructor(slug : String)
    {
        this.slug = slug
    }

    static generate(title : String)
    {
        console.log('THIS IS THE TITLE', title)
        let slug = title.split(' ').join('-').toLowerCase()
        return new this(slug)
    }

    value()
    {
        return this.slug
    }
}
