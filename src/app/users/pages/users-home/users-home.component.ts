import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/users.interface';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'users-home',
  templateUrl: './users-home.component.html',
  styles: [
  ]
})
export class UsersHomeComponent implements OnInit{

  public users: User[] = [];

  constructor(private usersService: UsersService){}

  ngOnInit(): void {
    this.usersService.getUsers()
      .subscribe( users => this.users = users);
  }
}
