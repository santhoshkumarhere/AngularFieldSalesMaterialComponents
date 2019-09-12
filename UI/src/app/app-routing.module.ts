import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './shared/components/home/home.component';
import { LoginComponent } from './login/login.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: '', component: HomeComponent },
    {path :'customer-list', component: CustomerListComponent},
    { path: 'menu', loadChildren: './modules/menu/menu.module#MenuModule' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}