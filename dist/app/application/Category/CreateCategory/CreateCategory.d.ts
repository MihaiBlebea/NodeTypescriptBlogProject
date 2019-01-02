import { CategoryRepo } from './../../../domain/Category';
import { AppService } from './../../AppService';
import { CreateCategoryRequest } from './CreateCategoryRequest';
export declare class CreateCategory implements AppService {
    private repo;
    constructor(repo: CategoryRepo);
    execute(request: CreateCategoryRequest): void;
}
