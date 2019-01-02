import express from 'express'
import body from 'body-parser'
import cors from 'cors'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config({ path: __dirname + '/../.env' })

import { router } from './routes'
import { Container } from './util'

const app = express()



app.use('/public', express.static(path.join(__dirname, './../public')))

app.use(cors())

app.use(body.json())



app.get('/', (request, response)=> {
    let repo = Container.get('MysqlArticleRepo')
    console.log(repo)
    response.send(`It works! ${ process.env.LOCAL_MYSQL_HOST }`)
})

app.use('/article', router.articles())

app.use('/category', router.categories())


app.listen(3000, ()=> {
    console.log('App works on port 3000')
})
