import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { User } from './../user.model';

@Component({
  selector: 'app-user-insert',
  templateUrl: './user-insert.component.html',
  styleUrls: ['./user-insert.component.scss']
})
export class UserInsertComponent implements OnInit {

  constructor(
  	private userService: UserService
  ) { }

  ngOnInit() {
  }

  insert(){
  	this.userService.create(new User({ id: '5', name: 'Novo', isAdmin: true }));
  }

}
