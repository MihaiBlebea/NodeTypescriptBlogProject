import { Author } from './Author';
export declare class Article {
    private id?;
    private category;
    private title;
    private slug;
    private body;
    private image;
    private author;
    private updated;
    private created;
    constructor(category: string, title: string, body: string, image: string, author: string, slug?: string, id?: string, updated?: Date, created?: Date);
    getId(): string;
    setId(id: string): void;
    getCategory(): string;
    setCategory(category: string): void;
    getTitle(): string;
    setTitle(title: string): void;
    getSlug(): String;
    setSlug(slug?: String): void;
    getBody(): string;
    setBody(body: string): void;
    getImage(): string;
    setImage(image: string): void;
    getAuthor(): Author;
    setAuthor(author: string): void;
    update(): void;
    getUpdated(): Date;
    getCreated(): Date;
}
