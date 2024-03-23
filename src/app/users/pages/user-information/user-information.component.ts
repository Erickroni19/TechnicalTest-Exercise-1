import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/users.interface';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styles: [
  ]
})
export class UserInformationComponent implements OnInit{

  public userInformation?: User;

  constructor(private usersService: UsersService){}

  ngOnInit(): void {
    console.log(this.usersService.user);

    this.userInformation = this.usersService.user;
  }

}
