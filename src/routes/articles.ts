import express from 'express'

import { renderTemplate } from './../util/render'

const router = express.Router()
const folderPath = __dirname + '/../../public'


router.get('/', (request, response)=> {
    renderTemplate(folderPath + '/index.liquid', {
        title: 'Andrei page',
        name: 'Andrei'
    }).then((result)=> {
        response.send(result)
    })
})

export default router
