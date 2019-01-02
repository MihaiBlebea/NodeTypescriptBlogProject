import { EventStore } from 'event-manager-js'
import { SendEmail } from './../app/infrastructure/email/SendEmail'


let store = new EventStore()


store.on('ArticlePublished', new SendEmail())

export default store
