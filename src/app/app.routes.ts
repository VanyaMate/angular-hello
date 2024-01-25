import { Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { ItemComponent } from './pages/item/item.component';
import { IdComponent } from './pages/item/id/id.component';


export const routes: Routes = [
    { path: 'list', component: ListComponent },
    {
        path    : 'item',
        children: [
            { path: '', component: ItemComponent },
            { path: ':id', component: IdComponent },
        ],
    },
];
