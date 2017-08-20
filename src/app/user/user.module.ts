import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MdButtonModule, MdCheckboxModule, MdIconModule, MdInputModule } from '@angular/material';

import { ConfirmationDialogModule } from './../shared/helpers/confirmation-dialog';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserInsertComponent } from './user-insert/user-insert.component';
import { UserLogoutComponent } from './user-logout/user-logout.component';
import { UserRoutingModule } from './user-routing.module';
import { UserCardComponent } from './user-card/user-card.component';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
    imports: [
        CommonModule,
        ConfirmationDialogModule,
        MdButtonModule,
        MdCheckboxModule,
        MdIconModule,
        MdInputModule,
        ReactiveFormsModule,
        UserRoutingModule
    ],
    declarations: [
        UserLoginComponent,
        UserListComponent,
        UserEditComponent,
        UserInsertComponent,
        UserLogoutComponent,
        UserCardComponent,
        UserFormComponent
    ]
})
export class UserModule { }
