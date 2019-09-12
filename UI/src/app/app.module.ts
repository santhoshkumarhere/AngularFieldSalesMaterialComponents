import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './shared/components/home/home.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './shared/components/error/error.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

import '../assets/styles';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        ErrorComponent,
        CustomerListComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        FormsModule,
        AppRoutingModule
    ],

    entryComponents : [ErrorComponent],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}