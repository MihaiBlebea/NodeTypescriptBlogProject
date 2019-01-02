import { AppRequest } from './../../AppRequest';
export declare class CreateArticleRequest implements AppRequest {
    category: string;
    title: string;
    body: string;
    image: string;
    author: string;
    constructor(category: string, title: string, body: string, image: string, author: string);
}
