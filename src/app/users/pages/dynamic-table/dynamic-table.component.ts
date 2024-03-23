import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../../interfaces/users.interface';
import { UsersService } from '../../services/users.service';
import { FormControl } from '@angular/forms';
import { TableRowSelectEvent } from 'primeng/table';
import { Router } from '@angular/router';

@Component({
  selector: 'users-home',
  templateUrl: './dynamic-table.component.html',
  styles: [
  ]
})
export class DynamicTableComponent implements OnInit{

  public users: User[] = [];
  public selectedUser?: User;
  public name = new FormControl('');


  constructor(
    private usersService: UsersService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.usersService.getUsers()
      .subscribe( users => this.users = users);
  }

  onRowSelected(): void {

    if( this.selectedUser){

      this.usersService.saveUserData(this.selectedUser);
      this.router.navigateByUrl('user-information');

    }

  }

  filterByName(users: User[]): User[]{

    const name = this.name.value?.toLocaleLowerCase()

    return users.filter( user => user.name.toLowerCase().includes(name!));

  }
}
