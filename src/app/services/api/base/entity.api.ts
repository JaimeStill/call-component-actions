import {
    Entity,
    IStorage,
    SessionStorage
} from '../../../models';

import { BehaviorSubject } from 'rxjs';

export abstract class EntityApi<T extends Entity> {
    entities: T[] = new Array<T>();

    constructor(
        protected endpoint: string
    ) { }

    protected base = () => <T>{
        id: 0,
        name: '',
        url: ''
    }

    getBase = () => this.base();

    generateStorage = (entity: T): IStorage<T> =>
        new SessionStorage<T>(
            entity?.id
                ? `conductor-${this.endpoint}-${entity.id}`
                : `conductor-${this.endpoint}-new`
        );
}
