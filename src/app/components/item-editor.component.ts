import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';

import {
    FormBuilder,
    FormGroup
} from '@angular/forms';

import {
    GenerateItemForm,
    IStorage,
    Item,
} from '../models';

import { ItemApi } from '../services';

@Component({
    selector: 'item-editor',
    templateUrl: 'item-editor.component.html'
})
export class ItemEditor implements OnInit {
    storage: IStorage<Item>;
    form: FormGroup;

    @Input() item: Item;
    @Output() saved = new EventEmitter<Item>();

    constructor(
        private fb: FormBuilder,
        private itemApi: ItemApi
    ) { }

    ngOnInit(): void {
        this.storage = this.itemApi.generateStorage(this.item);

        const value = this.storage.hasState
            ? this.storage.get()
            : this.item;

        this.form = GenerateItemForm(value, this.fb);

        this.form
            .valueChanges
            .subscribe((item: Item) => this.storage.set(item));
    }

    clearStorage = () => {
        this.form.reset(this.item);
        this.storage.clear();
    }

    save = () => {
        if (this.form?.valid) {
            this.saved.emit(this.form.value);
            this.clearStorage();
        }
    }
}
