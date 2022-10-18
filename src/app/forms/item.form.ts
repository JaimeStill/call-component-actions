import {
    Component,
    Input
} from '@angular/core';

import { FormGroup } from '@angular/forms';

@Component({
    selector: 'item-form',
    templateUrl: 'item.form.html'
})
export class ItemForm {
    @Input() form: FormGroup;

    get description() { return this.form?.get('description') }
}
