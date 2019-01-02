export declare class Slug {
    private slug;
    constructor(slug: String);
    static generate(title: String): Slug;
    value(): String;
}
