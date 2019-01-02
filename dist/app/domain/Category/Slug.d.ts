export declare class Slug {
    private slug;
    constructor(slug: string);
    static generate(title: string): Slug;
    value(): string;
}
