import articleRouter from './articles'
import categoryRouter from './categories'


export namespace router {
    export const articles = ()=> articleRouter

    export const categories = ()=> categoryRouter
}
