import { Component,OnInit } from '@angular/core';
import { User } from '../../interfaces/users.interface';
import { UsersService } from '../../services/users.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'users-home',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements OnInit{

  public isLoading: boolean = false;
  public users: User[] = [];
  public selectedUser?: User;
  public name = new FormControl('');


  constructor(
    private usersService: UsersService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.isLoading = true;

    this.usersService.getUsers()
      .subscribe( users =>{
        this.users = users;


        setTimeout( () => {
          if(users.length > 0) this.isLoading = false;
        },400)

      });
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
