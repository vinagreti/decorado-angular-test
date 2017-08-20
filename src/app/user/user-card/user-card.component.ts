import { Component, OnInit, Input } from '@angular/core';
import { User, UserService } from './../';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

    @Input() user: User;

    constructor(
        public userService: UserService
    ) { }

    ngOnInit() {

    }

}
