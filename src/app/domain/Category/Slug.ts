
export class Slug
{
    private slug : string

    constructor(slug : string)
    {
        this.slug = slug
    }

    static generate(title : string)
    {
        let slug = title.split(' ').join('-').toLowerCase()
        return new this(slug)
    }

    value()
    {
        return this.slug
    }
}
