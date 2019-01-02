import { DomainEvent } from 'event-manager-js'


export class ArticlePublished extends DomainEvent
{
    constructor()
    {
        super()
    }

    get payload()
    {
        return {
            occurredOn: this.timestamp
        }
    }
}
