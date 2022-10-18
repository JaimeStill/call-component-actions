import {
    Component,
    Inject,
    OnInit
} from '@angular/core';

import {
    MatDialogRef,
    MAT_DIALOG_DATA
} from '@angular/material/dialog';

import { Item } from '../models';

@Component({
    selector: 'item-dialog',
    templateUrl: 'item.dialog.html'
})
export class ItemDialog implements OnInit {
    constructor(
        private dialog: MatDialogRef<ItemDialog>,
        @Inject(MAT_DIALOG_DATA) public item: Item
    ) { }

    ngOnInit(): void {
        if (!this.item)
            this.dialog.close()
    }

    saved = (item: Item) => this.dialog.close(item);
}
