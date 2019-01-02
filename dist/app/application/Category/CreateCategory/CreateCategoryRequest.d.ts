import { AppRequest } from './../../AppRequest';
export declare class CreateCategoryRequest implements AppRequest {
    title: string;
    slug: string;
    constructor(title: string, slug: string);
}
