import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersHomeComponent } from './pages/users-home/users-home.component';
import { UserInformationComponent } from './pages/user-information/user-information.component';
import { DynamicTableComponent } from './components/dynamic-table/dynamic-table.component';

import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    UsersHomeComponent,
    UserInformationComponent,
    DynamicTableComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    InputTextModule,
  ]
})
export class UsersModule { }
