import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ErrorComponent } from '../shared/components/error/error.component';

@Component({
    selector: 'login-page',
    templateUrl: './login.component.html'
})

export class LoginComponent {
    public username: string = "";
    public password: string = "";

    constructor(private dialog: MatDialog) { }

    login() {
        if (this.username === "demo" && this.password === "demo") {

            // this.router.navigate(['customer']);
        } else {
            this.dialog.open(ErrorComponent, { data: { message: "Your login information is incorrect!" } });
        }
    }

}