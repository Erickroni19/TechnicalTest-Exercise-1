import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { User } from '../../interfaces/users.interface';
import { TableRowSelectEvent } from 'primeng/table';


@Component({
  selector: 'users-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styles: [
  ]
})
export class DynamicTableComponent implements OnInit{

  @Input()
  public users: User[] = [];

  selectedUser!: User;

  ngOnInit(): void {

  }

  onRowSelected(event: TableRowSelectEvent): void {
    console.log(this.selectedUser, event.data);

  }

}
