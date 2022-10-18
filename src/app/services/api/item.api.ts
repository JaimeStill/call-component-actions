import { Injectable } from '@angular/core';
import { Item } from '../../models';
import { EntityApi } from './base';

@Injectable({
    providedIn: 'root'
})
export class ItemApi extends EntityApi<Item> {
    constructor() {
        super('item');
    }

    override getBase = () => Object.assign(
        <Item>{ description: '' },
        this.base()
    );
}
