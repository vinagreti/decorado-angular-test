import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { User } from './../user.model';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

    users: Observable<User[]>;

    constructor(
        private userService: UserService
    ) {
        this.users = new Observable<User[]>();
    }

    ngOnInit() {
        this.fetchData();
    }

    private fetchData = () => {
        this.users = this.userService.users;
    }

}
