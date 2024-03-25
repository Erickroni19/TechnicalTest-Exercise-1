import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/users.interface';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit, OnDestroy{

  public userInformation?: User;

  constructor(private usersService: UsersService){}

  ngOnInit(): void {

    this.userInformation = this.usersService.user;

  }

  ngOnDestroy(): void {

    this.usersService.deletedLocalStorage();

  }

}
