import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ItemDialog } from '../../dialogs';
import { Item } from '../../models';
import { ItemApi } from '../../services';

@Component({
    selector: 'home-route',
    templateUrl: 'home.route.html'
})
export class HomeRoute {
    constructor(
        private dialog: MatDialog,
        public itemApi: ItemApi
    ) { }

    addItem = () => this.dialog.open(ItemDialog, {
        data: this.itemApi.getBase(),
        disableClose: true
    })
    .afterClosed()
    .subscribe((item: Item | null) => {
        if (item) {
            this.itemApi.entities.push(item);
        }
    })
}
