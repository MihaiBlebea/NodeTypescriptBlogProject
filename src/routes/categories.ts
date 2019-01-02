import express from 'express'

const router = express.Router()

router.get('/', (request, response)=> {
    response.send('Works from routes')
})

export default router
