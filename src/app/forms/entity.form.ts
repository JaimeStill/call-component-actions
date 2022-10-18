import {
    Component,
    Input
} from '@angular/core';

import { FormGroup } from '@angular/forms';

@Component({
    selector: 'entity-form',
    templateUrl: 'entity.form.html'
})
export class EntityForm {
    @Input() form: FormGroup;

    get name() { return this.form?.get('name') }
}
