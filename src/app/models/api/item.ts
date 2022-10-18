import {
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';

import {
    Entity,
    GenerateEntityForm
} from './base';

export interface Item extends Entity {
    description: string;
}

export const GenerateItemForm = (item: Item, fb: FormBuilder): FormGroup =>
    fb.group({
        ...(GenerateEntityForm(item, fb)).controls,
        description: [item?.description ?? '', Validators.required]
    });
