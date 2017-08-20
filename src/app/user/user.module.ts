import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MdButtonModule, MdIconModule, MdInputModule } from '@angular/material';

import { UserLoginComponent } from './user-login/user-login.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserInsertComponent } from './user-insert/user-insert.component';
import { UserLogoutComponent } from './user-logout/user-logout.component';
import { UserRoutingModule } from './user-routing.module';
import { UserCardComponent } from './user-card/user-card.component';

@NgModule({
    imports: [
        CommonModule,
        MdButtonModule,
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
        UserCardComponent
    ]
})
export class UserModule { }
