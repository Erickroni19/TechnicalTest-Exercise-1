import { Component, Input } from '@angular/core';
import { User } from '../../interfaces/users.interface';
import { TableRowSelectEvent } from 'primeng/table';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'users-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styles: [
  ]
})
export class DynamicTableComponent {

  @Input()
  public users: User[] = [];

  public selectedUser!: User;
  public name = new FormControl('');


  onRowSelected(event: TableRowSelectEvent): void {
    console.log(this.selectedUser, event.data);

  }

  filterByName(users: User[]): User[]{

    const name = this.name.value?.toLocaleLowerCase()

    return users.filter( user => user.name.toLowerCase().includes(name!));

  }

}
