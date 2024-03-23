import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UserInformationComponent } from './pages/user-information/user-information.component';
import { DynamicTableComponent } from './pages/dynamic-table/dynamic-table.component';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    UserInformationComponent,
    DynamicTableComponent,
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
