import { Routes } from '@angular/router';
import { PATH } from './models/routes.model';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';

export const routes: Routes = [
    { path: '', redirectTo : PATH.root.pins , pathMatch : "full"},
    {
        path: PATH.root.pins,
        loadChildren: () => import('./home/pins/pins.module').then((m) => m.PinsModule),
    },
    {
        path: PATH.root.customers,
        loadChildren: () => import('./home/customers/customers.module').then((m) => m.CustomersModule),
    },
    { path: '**', component: PagenotfoundComponent }
];
