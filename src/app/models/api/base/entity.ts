import {
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';

export abstract class Entity {
    id: number;
    url: string;
    name: string;
}

export const GenerateEntityForm = <T extends Entity>(entity: T, fb: FormBuilder): FormGroup =>
    fb.group({
        id: [entity?.id ?? 0],
        name: [entity?.name ?? '', Validators.required],
        url: [entity?.url ?? '']
    })
