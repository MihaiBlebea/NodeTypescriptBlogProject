import { Category } from './Category';
export interface CategoryRepo {
    add(category: Category): any;
    addAll(categories: Category[]): any;
    remove(category: Category): Boolean;
    removeAll(categories: Category[]): Boolean;
    all(limit: Number, offset: Number): [Category];
    withId(id: String): any;
    flush(): void;
}
