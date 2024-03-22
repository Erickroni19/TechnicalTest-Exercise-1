import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersHomeComponent } from './pages/users-home/users-home.component';
import { UserInformationComponent } from './pages/user-information/user-information.component';
import { DynamicTableComponent } from './components/dynamic-table/dynamic-table.component';


@NgModule({
  declarations: [
    UsersHomeComponent,
    UserInformationComponent,
    DynamicTableComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
