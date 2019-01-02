import { Container } from 'typescript-dependency-injection'
import { connection } from './../app/infrastructure/persistence'
import { MysqlArticleRepo } from './../app/infrastructure/persistence'

let container = new Container()

container.register(MysqlArticleRepo)
         .dependsOn(connection)

export default container
