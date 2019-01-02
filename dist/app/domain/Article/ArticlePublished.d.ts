import { DomainEvent } from 'event-manager-js';
export declare class ArticlePublished extends DomainEvent {
    constructor();
    readonly payload: {
        occurredOn: Date;
    };
}
