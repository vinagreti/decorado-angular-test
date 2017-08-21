import { Component } from '@angular/core';
import { UserService } from './../user.service';
import { User } from './../user.model';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

    constructor(
        private userService: UserService
    ) {}

}
