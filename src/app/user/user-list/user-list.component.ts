import { Component, ElementRef, ViewChild } from '@angular/core';
import { UserService } from './../user.service';
import { User } from './../user.model';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

    showFilter: boolean;
    @ViewChild('searchStringField') searchStringField: ElementRef;

    constructor(
        private userService: UserService
    ) {}

    toggleFilter = () => {
        this.showFilter = !this.showFilter;

        setTimeout(() => {
            if(this.showFilter){
                this.searchStringField.nativeElement.focus();
            }
        }, 1)
    }

}
