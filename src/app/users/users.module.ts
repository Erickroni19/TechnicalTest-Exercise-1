import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DynamicTableComponent } from './components/dynamic-table/dynamic-table.component';
import { UserInformationComponent } from './pages/user-information/user-information.component';
import { UsersHomeComponent } from './pages/users-home/users-home.component';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    DynamicTableComponent,
    UserInformationComponent,
    UsersHomeComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    ButtonModule,
    InputTextModule,
    TableModule,
  ]
})
export class UsersModule { }
